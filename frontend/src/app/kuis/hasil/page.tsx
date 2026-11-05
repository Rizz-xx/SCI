'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  BookOpen,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface QuizResultData {
  sessionId?: string
  totalScore: number
  totalCorrect: number
  totalWrong: number
  totalQuestions: number
  percentage: number
  completedAt?: string
}

function HasilKuisContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [result, setResult] = useState<QuizResultData>({
    totalScore: 0,
    totalCorrect: 0,
    totalWrong: 0,
    totalQuestions: 25,
    percentage: 0,
  })

  const [displayedScore, setDisplayedScore] = useState(0)

  // Baca hasil dari sessionStorage atau URL searchParams
  useEffect(() => {
    let parsedResult: QuizResultData | null = null

    // 1. Cek sessionStorage
    if (typeof window !== 'undefined') {
      try {
        const stored = sessionStorage.getItem('quiz_result')
        if (stored) {
          parsedResult = JSON.parse(stored)
        }
      } catch {
        // Abaikan parse error
      }
    }

    // 2. Cek URL searchParams jika sessionStorage kosong
    if (!parsedResult) {
      const scoreParam = searchParams.get('score')
      const correctParam = searchParams.get('correct')
      const wrongParam = searchParams.get('wrong')
      const totalParam = searchParams.get('total')
      const sessionParam = searchParams.get('sessionId')

      if (scoreParam !== null) {
        const score = parseInt(scoreParam, 10) || 0
        const correct = parseInt(correctParam || '0', 10) || 0
        const total = parseInt(totalParam || '25', 10) || 25
        const wrong = parseInt(wrongParam || '0', 10) || (total - correct)
        const percentage = total > 0 ? Math.round((correct / total) * 100) : score

        parsedResult = {
          sessionId: sessionParam || undefined,
          totalScore: score,
          totalCorrect: correct,
          totalWrong: wrong,
          totalQuestions: total,
          percentage,
        }
      }
    }

    // Default jika dibuka tanpa parameter
    const finalData = parsedResult || {
      totalScore: 84,
      totalCorrect: 21,
      totalWrong: 4,
      totalQuestions: 25,
      percentage: 84,
    }

    setResult(finalData)

    // Animasi Count-Up skor dari 0 ke target
    const targetScore = finalData.percentage
    let current = 0
    const stepTime = 15
    const totalSteps = 40
    const increment = Math.max(1, Math.ceil(targetScore / totalSteps))

    const timer = setInterval(() => {
      current += increment
      if (current >= targetScore) {
        setDisplayedScore(targetScore)
        clearInterval(timer)
      } else {
        setDisplayedScore(current)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [searchParams])

  // Evaluasi predikat, warna, dan pesan motivasi
  const score = result.percentage

  let labelPredikat = 'Perlu Latihan'
  let labelColor = 'text-rose-400'
  let badgeGradient = 'from-rose-500/20 to-red-500/10 border-rose-500/40'
  let ringColor = '#f43f5e'
  let motivasiPesan =
    'Jangan berkecil hati! Pelajari kembali materi modul organ, enzim, dan proses pencernaan untuk memperkuat pemahaman konsep Anda.'

  if (score >= 85) {
    labelPredikat = 'Sangat Baik'
    labelColor = 'text-amber-300'
    badgeGradient = 'from-amber-500/20 via-emerald-500/20 to-teal-500/10 border-amber-500/40'
    ringColor = '#f59e0b'
    motivasiPesan =
      'Luar biasa istimewa! Anda telah menguasai anatomi, reaksi biokimia enzimatis, dan mekanisme absorpsi sistem pencernaan dengan sangat matang.'
  } else if (score >= 70) {
    labelPredikat = 'Baik'
    labelColor = 'text-emerald-400'
    badgeGradient = 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40'
    ringColor = '#10b981'
    motivasiPesan =
      'Kerja bagus! Pemahaman Anda terhadap materi sistem pencernaan manusia sudah solid dan melampaui standar ketuntasan.'
  } else if (score >= 55) {
    labelPredikat = 'Cukup'
    labelColor = 'text-sky-400'
    badgeGradient = 'from-sky-500/20 to-blue-500/10 border-sky-500/40'
    ringColor = '#0ea5e9'
    motivasiPesan =
      'Cukup baik! Masih ada beberapa konsep detail enzim atau uji laboratorium yang dapat Anda perdalam kembali di menu materi.'
  }

  // Parameter SVG Progress Ring Lingkaran
  const radius = 78
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (displayedScore / 100) * circumference

  return (
    <main className="page-container min-h-screen pb-20 pt-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Confetti Partikel jika skor >= 70 */}
      {score >= 70 && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {Array.from({ length: 36 }).map((_, i) => {
            const colors = ['#f59e0b', '#10b981', '#0ea5e9', '#ec4899', '#8b5cf6', '#34d399']
            const randomColor = colors[i % colors.length]
            const leftPos = `${(i * 2.8) % 100}%`
            const delay = `${(i * 0.15) % 2.5}s`
            const duration = `${2.5 + ((i * 0.2) % 2)}s`

            return (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 1, rotate: 0 }}
                animate={{
                  y: ['0vh', '105vh'],
                  rotate: [0, 360],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: parseFloat(duration),
                  delay: parseFloat(delay),
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                className="absolute w-2.5 h-2.5 rounded-sm"
                style={{
                  left: leftPos,
                  backgroundColor: randomColor,
                }}
              />
            )
          })}
        </div>
      )}

      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full blur-[140px] opacity-25"
          style={{ backgroundColor: ringColor }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Kartu Hasil Utama */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 sm:p-10 border border-white/10 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Trophy Header */}
          <div className="flex justify-center mb-6">
            <div
              className={`w-20 h-20 rounded-3xl p-4 border flex items-center justify-center shadow-inner ${
                score >= 70 ? 'bg-amber-500/15 border-amber-500/30 text-amber-400' : 'bg-slate-800 border-white/10 text-slate-300'
              }`}
            >
              {score >= 85 ? (
                <Trophy className="w-12 h-12 stroke-[1.8] animate-bounce" />
              ) : (
                <Award className="w-12 h-12 stroke-[1.8]" />
              )}
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Hasil Evaluasi Kuis
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mb-8">
            Kurikulum Biologi SMA Kelas XI - Sistem Pencernaan Manusia
          </p>

          {/* PROGRESS RING BESAR & COUNT-UP SKOR DI TENGAH */}
          <div className="relative w-52 h-52 mx-auto flex items-center justify-center mb-8">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
              {/* Lingkaran Background Rail */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="rgba(51, 65, 85, 0.4)"
                strokeWidth="12"
              />
              {/* Lingkaran Progress Stroke */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={ringColor}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Angka Skor di Tengah */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                {displayedScore}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                Poin / 100
              </span>
            </div>
          </div>

          {/* BADGE PREDIKAT */}
          <div className="inline-block mb-6">
            <span
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-extrabold uppercase tracking-wider border shadow-md ${badgeGradient} ${labelColor}`}
            >
              Predikat: {labelPredikat}
            </span>
          </div>

          {/* PESAN MOTIVASI */}
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8 bg-slate-900/50 p-4 rounded-2xl border border-white/5">
            {motivasiPesan}
          </p>

          {/* STATISTIK GRID CARDS (BENAR / SALAH / AKURASI) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-emerald-500/20 text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Benar</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {result.totalCorrect}{' '}
                <span className="text-xs text-slate-500 font-normal">/ {result.totalQuestions}</span>
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-rose-500/20 text-center">
              <div className="flex items-center justify-center gap-1 text-rose-400 mb-1">
                <XCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Salah</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {result.totalWrong}{' '}
                <span className="text-xs text-slate-500 font-normal">/ {result.totalQuestions}</span>
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-2xl border border-sky-500/20 text-center">
              <div className="flex items-center justify-center gap-1 text-sky-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Akurasi</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white">
                {result.percentage}%
              </p>
            </div>
          </div>

          {/* TOMBOL AKSI UTAMA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-white/10">
            <Link
              href="/kuis"
              className="w-full sm:w-auto btn-primary text-sm py-3.5 px-6 flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </Link>

            <Link
              href="/menu"
              className="w-full sm:w-auto btn-secondary text-sm py-3.5 px-6 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Menu</span>
            </Link>

            <Link
              href="/materi"
              className="w-full sm:w-auto btn-secondary text-sm py-3.5 px-6 flex items-center justify-center gap-2 hover:border-emerald-500/50"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Buka Materi</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default function HasilKuisPage() {
  return (
    <Suspense
      fallback={
        <main className="page-container min-h-screen flex items-center justify-center p-4">
          <LoadingSpinner size="lg" text="Memuat lembar hasil evaluasi kuis..." />
        </main>
      }
    >
      <HasilKuisContent />
    </Suspense>
  )
}
