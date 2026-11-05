'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Trophy,
  BookOpen,
  Award,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ErrorState } from '@/components/ui/ErrorState'
import { QUIZ_QUESTIONS } from '@/data/quiz-data'
import { QuizQuestion, AnswerFeedback } from '@/types/quiz'

export default function KuisInteraktifPage() {
  const router = useRouter()

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null)
  const [answers, setAnswers] = useState<
    Array<{ questionId: string; selectedOptionId: string; isCorrect: boolean }>
  >([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null)

  // Inisialisasi: Buat sesi dan ambil soal (API dengan fallback data lokal)
  const initializeQuiz = async () => {
    setIsLoading(true)
    setError(null)
    setCurrentIndex(0)
    setSelectedOption(null)
    setFeedback(null)
    setAnswers([])

    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

    // 1. Inisialisasi Sesi
    try {
      const sessionRes = await fetch(`${apiBase}/progress/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentName: 'Siswa Biologi' }),
      })
      if (sessionRes.ok) {
        const sessionData = await sessionRes.json()
        setSessionId(sessionData.sessionId)
      } else {
        setSessionId(`local-${Date.now()}`)
      }
    } catch {
      setSessionId(`local-${Date.now()}`)
    }

    // 2. Fetch Soal
    try {
      const qRes = await fetch(`${apiBase}/quiz/questions`)
      if (qRes.ok) {
        const qData = await qRes.json()
        if (Array.isArray(qData) && qData.length > 0) {
          setQuestions(qData)
        } else {
          setQuestions(QUIZ_QUESTIONS)
        }
      } else {
        setQuestions(QUIZ_QUESTIONS)
      }
    } catch {
      // Fallback mulus ke data lokal 25 soal
      setQuestions(QUIZ_QUESTIONS)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    initializeQuiz()
  }, [])

  // Soal saat ini
  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length
  const progressPercent = totalQuestions > 0 ? ((currentIndex + 1) / totalQuestions) * 100 : 0

  // Pilih jawaban
  const handleSelectOption = (optionId: string) => {
    if (feedback) return // Kunci jika jawaban sudah dikonfirmasi
    setSelectedOption(optionId)
  }

  // Kirim dan Periksa Jawaban
  const handleSubmitAnswer = async () => {
    if (!selectedOption || !currentQuestion || feedback) return

    setIsSubmitting(true)
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

    let fb: AnswerFeedback | null = null

    // Coba verifikasi via API
    try {
      const res = await fetch(`${apiBase}/quiz/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          selectedOptionId: selectedOption,
        }),
      })

      if (res.ok) {
        fb = await res.json()
      }
    } catch {
      // Fallback evaluasi lokal jika API offline
    }

    // Jika API gagal atau belum menghasilkan feedback, evaluasi dari data lokal
    if (!fb) {
      const fallbackQ = QUIZ_QUESTIONS.find((q) => q.id === currentQuestion.id) || currentQuestion
      const correctOpt = fallbackQ.options.find((o) => o.isCorrect)
      const chosenOpt = fallbackQ.options.find((o) => o.id === selectedOption)
      const isCorrect = chosenOpt?.isCorrect === true

      fb = {
        isCorrect,
        correctOptionId: correctOpt?.id || '',
        explanation:
          (fallbackQ as any).explanation ||
          correctOpt?.explanation ||
          'Jawaban yang tepat sesuai dengan konsep fisiologi sistem pencernaan manusia.',
      }
    }

    setFeedback(fb)
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedOptionId: selectedOption,
        isCorrect: fb!.isCorrect,
      },
    ])
    setIsSubmitting(false)
  }

  // Lanjut ke soal berikutnya atau selesaikan kuis
  const handleNextQuestion = async () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedOption(null)
      setFeedback(null)
    } else {
      // Soal terakhir selesai -> simpan hasil dan navigasi ke halaman hasil
      setIsSubmitting(true)
      const totalCorrect = answers.filter((a) => a.isCorrect).length
      const totalWrong = totalQuestions - totalCorrect
      const percentage = Math.round((totalCorrect / totalQuestions) * 100)
      const totalScore = percentage

      const resultPayload = {
        sessionId: sessionId || `session-${Date.now()}`,
        totalScore,
        totalCorrect,
        totalWrong,
        totalQuestions,
        percentage,
        completedAt: new Date().toISOString(),
      }

      // Coba laporkan ke backend
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
        await fetch(`${apiBase}/quiz/complete`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: resultPayload.sessionId,
            answers,
          }),
        })
      } catch {
        // Abaikan jika backend tidak tersedia
      }

      // Simpan ke sessionStorage untuk halaman hasil
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('quiz_result', JSON.stringify(resultPayload))
      }

      // Arahkan ke halaman hasil
      router.push(
        `/kuis/hasil?score=${totalScore}&correct=${totalCorrect}&wrong=${totalWrong}&total=${totalQuestions}&sessionId=${resultPayload.sessionId}`
      )
    }
  }

  // Helper badge kategori
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'organ':
        return <span className="badge-green">Anatomi Organ</span>
      case 'proses':
        return <span className="badge-teal">Mekanik & Kimiawi</span>
      case 'enzim':
        return <span className="badge-blue">Enzimatis</span>
      case 'penyerapan':
        return <span className="badge-green">Absorpsi Nutrisi</span>
      case 'lab':
        return <span className="badge-teal">Uji Zat Makanan</span>
      default:
        return <span className="badge-green">Biologi SMA</span>
    }
  }

  if (isLoading) {
    return (
      <main className="page-container min-h-screen flex items-center justify-center p-4">
        <LoadingSpinner size="lg" text="Menyiapkan bank soal kuis sistem pencernaan..." />
      </main>
    )
  }

  if (error || questions.length === 0) {
    return (
      <main className="page-container min-h-screen flex items-center justify-center p-4">
        <ErrorState
          title="Gagal Memuat Kuis"
          message={error || 'Bank soal belum dapat diakses saat ini. Silakan coba kembali.'}
          onRetry={initializeQuiz}
          retryText="Muat Ulang Soal"
        />
      </main>
    )
  }

  return (
    <main className="page-container min-h-screen pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      {/* Background glow ambiance */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <BackButton href="/menu" label="Menu Utama" />
          <div className="flex items-center gap-2">
            <span className="badge-green flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5" />
              <span>Evaluasi Mandiri</span>
            </span>
          </div>
        </div>

        {/* Header Kuis & Progress Bar */}
        <div className="glass-card p-5 sm:p-6 mb-6">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white">Kuis Interaktif</h1>
              <p className="text-xs text-slate-400">Sistem Pencernaan Manusia Kelas XI</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Progres Pengerjaan</span>
              <span className="text-sm sm:text-base font-black text-emerald-400">
                Soal {currentIndex + 1} <span className="text-slate-500 font-normal">/ {totalQuestions}</span>
              </span>
            </div>
          </div>

          {/* Progress Bar Indikator */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* KARTU SOAL (CARD PERTANYAAN) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="glass-card p-6 sm:p-8 mb-6 border border-white/10 shadow-2xl relative"
          >
            {/* Header Soal: Kategori & Nomor Soal */}
            <div className="flex items-center justify-between gap-3 mb-4">
              {getCategoryBadge(currentQuestion.category)}
              <span className="text-xs font-mono text-slate-400">
                Tujuan Pembelajaran #{currentQuestion.objective}
              </span>
            </div>

            {/* Teks Pertanyaan */}
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6 leading-relaxed">
              {currentQuestion.questionText}
            </h2>

            {/* 4 OPSI PILIHAN JAWABAN */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const optionLetter = String.fromCharCode(65 + idx) // A, B, C, D
                const isSelected = selectedOption === option.id
                const isCorrectAnswer = feedback?.correctOptionId === option.id
                const isUserWrong = feedback && isSelected && !feedback.isCorrect

                // Dynamic CSS class
                let optionClass = 'quiz-option'
                if (feedback) {
                  if (isCorrectAnswer) {
                    optionClass = 'quiz-option-correct'
                  } else if (isUserWrong) {
                    optionClass = 'quiz-option-wrong'
                  } else {
                    optionClass = 'quiz-option opacity-40 cursor-default'
                  }
                } else if (isSelected) {
                  optionClass = 'quiz-option-selected'
                }

                return (
                  <button
                    key={option.id}
                    type="button"
                    disabled={feedback !== null || isSubmitting}
                    onClick={() => handleSelectOption(option.id)}
                    className={`${optionClass} flex items-start gap-3.5`}
                  >
                    {/* Badge Huruf Opsi */}
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        feedback
                          ? isCorrectAnswer
                            ? 'bg-emerald-500 text-white'
                            : isUserWrong
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                          : isSelected
                          ? 'bg-sky-500 text-white shadow-md'
                          : 'bg-slate-800 text-slate-300 group-hover:bg-slate-700'
                      }`}
                    >
                      {optionLetter}
                    </span>

                    {/* Teks Jawaban */}
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5 text-left">
                      {option.text}
                    </span>

                    {/* Indikator Centang / Silang saat Feedback */}
                    {feedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-auto mt-0.5" />
                    )}
                    {feedback && isUserWrong && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-auto mt-0.5" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* FEEDBACK CARD (SETELAH MENJAWAB) */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`mt-6 p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                    feedback.isCorrect
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold mb-2 text-sm">
                    {feedback.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">Jawaban Anda Tepat Sekali!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-rose-300">Kurang Tepat</span>
                      </>
                    )}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{feedback.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* TOMBOL AKSI BAWAH */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 hidden sm:inline">
                {feedback
                  ? 'Tekan tombol untuk melanjutkan'
                  : 'Pilih salah satu jawaban di atas'}
              </span>

              {!feedback ? (
                <button
                  type="button"
                  disabled={!selectedOption || isSubmitting}
                  onClick={handleSubmitAnswer}
                  className="btn-primary text-xs sm:text-sm py-3 px-6 ml-auto disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <span>{isSubmitting ? 'Memeriksa...' : 'Kirim Jawaban'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="btn-primary text-xs sm:text-sm py-3 px-6 ml-auto flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>
                    {currentIndex < totalQuestions - 1
                      ? 'Soal Berikutnya'
                      : 'Selesai & Lihat Skor Akhir'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}
