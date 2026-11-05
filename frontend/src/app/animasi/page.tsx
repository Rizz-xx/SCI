'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Info,
  Clock,
  Activity,
  CheckCircle2,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'
import { ANIMATION_STAGES, AnimationStage } from '@/data/animation-stages'

export default function AnimasiPencernaanPage() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(5000) // 5 detik per tahap
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const totalStages = ANIMATION_STAGES.length
  const currentStage: AnimationStage = ANIMATION_STAGES[currentStageIndex]

  // Pengaturan auto-advance saat status isPlaying = true
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentStageIndex((prev) => {
          if (prev >= totalStages - 1) {
            setIsPlaying(false) // Berhenti otomatis di tahap akhir
            return prev
          }
          return prev + 1
        })
      }, playbackSpeed)
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isPlaying, playbackSpeed, totalStages])

  const handlePrev = () => {
    setIsPlaying(false)
    setCurrentStageIndex((prev) => (prev > 0 ? prev - 1 : totalStages - 1))
  }

  const handleNext = () => {
    setIsPlaying(false)
    setCurrentStageIndex((prev) => (prev < totalStages - 1 ? prev + 1 : 0))
  }

  const handleTogglePlay = () => {
    // Jika berada di akhir dan klik play, mulai lagi dari tahap 0
    if (!isPlaying && currentStageIndex >= totalStages - 1) {
      setCurrentStageIndex(0)
    }
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStageIndex(0)
  }

  const handleSelectStage = (idx: number) => {
    setIsPlaying(false)
    setCurrentStageIndex(idx)
  }

  // Cek apakah organ tertentu aktif di stage saat ini
  const isMulutActive = currentStageIndex === 0
  const isEsofagusActive = currentStageIndex === 1
  const isLambungActive = currentStageIndex === 2
  const isUsusHalusActive = currentStageIndex === 3
  const isUsusBesarActive = currentStageIndex === 4
  const isAnusActive = currentStageIndex === 5

  return (
    <main className="page-container min-h-screen pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      {/* Background glow ambiance */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[140px] opacity-25 transition-colors duration-1000"
          style={{ backgroundColor: currentStage.warna }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <BackButton href="/menu" label="Menu Utama" />
          <div className="flex items-center gap-3">
            <span className="badge-teal">Simulasi Visual Interaktif</span>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/70 border border-white/10 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Interval 5 detik</span>
            </div>
          </div>
        </div>

        {/* Header Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Animasi Perjalanan Makanan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Simulasi visual perjalanan bolus makanan melintasi 6 stasiun utama saluran pencernaan manusia dari rongga mulut hingga proses defekasi.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* KOLOM KIRI: SVG Animasi Tubuh & Controls (7 Kolom di Desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-4 sm:p-6 relative overflow-hidden flex flex-col items-center justify-center border border-white/10 shadow-2xl">
              {/* Badge Organ Aktif di Atas SVG */}
              <div className="w-full flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full animate-ping"
                    style={{ backgroundColor: currentStage.warna }}
                  />
                  <span className="text-xs font-bold text-slate-300">
                    Organ Aktif:
                  </span>
                  <span
                    className="text-xs font-black px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${currentStage.warna}25`,
                      color: currentStage.warna,
                      border: `1px solid ${currentStage.warna}60`,
                    }}
                  >
                    {currentStage.organ}
                  </span>
                </div>

                <div className="text-xs text-slate-400">
                  Klik organ pada diagram untuk loncat
                </div>
              </div>

              {/* KANVAS SVG ANATOMI SISTEM PENCERNAAN */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center py-2">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Filter Glow untuk Organ Aktif */}
                    <filter id="organGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

                    {/* Gradient Efek Cairan Lambung */}
                    <linearGradient id="stomachFluid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0.9" />
                    </linearGradient>

                    {/* Gradient Usus Halus */}
                    <linearGradient id="smallIntestineGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>

                  {/* Siluet Tubuh Manusia (Outline Halus) */}
                  <path
                    d="M 200 20
                       C 225 20, 245 40, 245 68
                       C 245 92, 230 110, 220 118
                       C 255 125, 295 145, 310 180
                       C 320 205, 315 250, 310 300
                       C 305 345, 290 380, 290 440
                       L 270 470 L 230 470 L 225 390
                       L 175 390 L 170 470 L 130 470 L 110 440
                       C 110 380, 95 345, 90 300
                       C 85 250, 80 205, 90 180
                       C 105 145, 145 125, 180 118
                       C 170 110, 155 92, 155 68
                       C 155 40, 175 20, 200 20 Z"
                    fill="rgba(15, 23, 42, 0.6)"
                    stroke="rgba(148, 163, 184, 0.25)"
                    strokeWidth="2.5"
                    strokeDasharray="4 2"
                  />

                  {/* Garis Tulang Dada / Klavi-kula Referensi Estetik */}
                  <path
                    d="M 140 135 Q 200 150 260 135"
                    fill="none"
                    stroke="rgba(148, 163, 184, 0.15)"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="135"
                    x2="200"
                    y2="200"
                    stroke="rgba(148, 163, 184, 0.1)"
                    strokeWidth="1.5"
                  />

                  {/* ==========================================
                      ORGAN 1: MULUT (Rongga Mulut & Gigi)
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(0)}
                  >
                    <path
                      d="M 185 75 Q 200 68 215 75 Q 200 90 185 75 Z"
                      fill={isMulutActive ? '#10b981' : '#334155'}
                      stroke={isMulutActive ? '#34d399' : '#64748b'}
                      strokeWidth={isMulutActive ? 3.5 : 2}
                      filter={isMulutActive ? 'url(#organGlow)' : undefined}
                    />
                    {isMulutActive && (
                      <circle cx="200" cy="78" r="4" fill="#ffffff" className="animate-pulse" />
                    )}
                  </g>

                  {/* ==========================================
                      ORGAN 2: KERONGKONGAN (Esofagus)
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(1)}
                  >
                    <path
                      d="M 196 90 L 196 205 L 204 205 L 204 90 Z"
                      fill={isEsofagusActive ? '#0ea5e9' : '#334155'}
                      stroke={isEsofagusActive ? '#38bdf8' : '#475569'}
                      strokeWidth={isEsofagusActive ? 3.5 : 2}
                      filter={isEsofagusActive ? 'url(#organGlow)' : undefined}
                      rx="3"
                    />
                    {/* Bolus Makanan Berjalan di Esofagus saat aktif */}
                    {isEsofagusActive && (
                      <motion.circle
                        cx="200"
                        r="5"
                        fill="#ffffff"
                        animate={{ cy: [95, 145, 195] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </g>

                  {/* ==========================================
                      ORGAN 3: LAMBUNG (Gaster)
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(2)}
                  >
                    {/* Bentuk Kantung Huruf J */}
                    <path
                      d="M 200 205
                         C 170 200, 160 225, 165 250
                         C 170 275, 200 280, 225 265
                         C 235 255, 230 235, 215 225
                         C 205 218, 202 210, 200 205 Z"
                      fill={isLambungActive ? 'url(#stomachFluid)' : '#334155'}
                      stroke={isLambungActive ? '#fbbf24' : '#475569'}
                      strokeWidth={isLambungActive ? 3.5 : 2}
                      filter={isLambungActive ? 'url(#organGlow)' : undefined}
                    />
                    {isLambungActive && (
                      <>
                        <circle cx="185" cy="245" r="3.5" fill="#ffffff" className="animate-ping" />
                        <circle cx="198" cy="255" r="2.5" fill="#fef08a" />
                      </>
                    )}
                  </g>

                  {/* ==========================================
                      ORGAN 5: USUS BESAR (Kolon - Mengelilingi)
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(4)}
                  >
                    {/* Bingkai U terbalik di sekitar usus halus */}
                    <path
                      d="M 155 350
                         L 155 285
                         Q 155 270 170 270
                         L 230 270
                         Q 245 270 245 285
                         L 245 355
                         L 232 355
                         L 232 285
                         L 168 285
                         L 168 350 Z"
                      fill={isUsusBesarActive ? '#ec4899' : '#1e293b'}
                      stroke={isUsusBesarActive ? '#f472b6' : '#475569'}
                      strokeWidth={isUsusBesarActive ? 3.5 : 2}
                      filter={isUsusBesarActive ? 'url(#organGlow)' : undefined}
                      strokeLinejoin="round"
                    />
                  </g>

                  {/* ==========================================
                      ORGAN 4: USUS HALUS (Intestinum Tenue)
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(3)}
                  >
                    {/* Lekukan melingkar di tengah perut */}
                    <path
                      d="M 215 265
                         C 200 280, 180 290, 200 305
                         C 220 320, 175 330, 205 345
                         C 225 355, 185 365, 200 375"
                      fill="none"
                      stroke={isUsusHalusActive ? 'url(#smallIntestineGrad)' : '#334155'}
                      strokeWidth={isUsusHalusActive ? 12 : 9}
                      strokeLinecap="round"
                      filter={isUsusHalusActive ? 'url(#organGlow)' : undefined}
                    />
                    {isUsusHalusActive && (
                      <path
                        d="M 215 265
                           C 200 280, 180 290, 200 305
                           C 220 320, 175 330, 205 345
                           C 225 355, 185 365, 200 375"
                        fill="none"
                        stroke="#c4b5fd"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="8 6"
                        className="animate-pulse"
                      />
                    )}
                  </g>

                  {/* ==========================================
                      ORGAN 6: ANUS & REKTUM
                     ========================================== */}
                  <g
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleSelectStage(5)}
                  >
                    {/* Kanal pembuangan ke bawah pelvis */}
                    <path
                      d="M 197 380 L 197 415 L 203 415 L 203 380 Z"
                      fill={isAnusActive ? '#94a3b8' : '#334155'}
                      stroke={isAnusActive ? '#f1f5f9' : '#475569'}
                      strokeWidth={isAnusActive ? 3.5 : 2}
                      filter={isAnusActive ? 'url(#organGlow)' : undefined}
                      rx="2"
                    />
                    <ellipse
                      cx="200"
                      cy="417"
                      rx="6"
                      ry="3"
                      fill={isAnusActive ? '#f8fafc' : '#475569'}
                    />
                  </g>

                  {/* Indikator Teks di Kanan Organ yang Sedang Aktif */}
                  <g transform={`translate(260, ${currentStageIndex * 58 + 75})`}>
                    <line
                      x1="-10"
                      y1="0"
                      x2="15"
                      y2="0"
                      stroke={currentStage.warna}
                      strokeWidth="2"
                      strokeDasharray="2 2"
                    />
                    <rect
                      x="18"
                      y="-12"
                      width="115"
                      height="24"
                      rx="6"
                      fill="rgba(15, 23, 42, 0.85)"
                      stroke={currentStage.warna}
                      strokeWidth="1"
                    />
                    <text
                      x="75"
                      y="4"
                      fill={currentStage.warna}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      Tahap {currentStageIndex + 1}: {currentStage.organ.split(' ')[0]}
                    </text>
                  </g>
                </svg>
              </div>

              {/* ========================================================
                  KONTROL PEMUTARAN (PREV, PLAY/PAUSE, NEXT, REPLAY)
                 ======================================================== */}
              <div className="w-full mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Reset / Replay Button */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
                  title="Ulangi dari tahap pertama"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Replay</span>
                </button>

                {/* Primary Transport Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-3 rounded-2xl bg-slate-800 border border-white/10 text-white hover:bg-slate-700 active:scale-95 transition-all"
                    aria-label="Tahap Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-600 text-white shadow-lg shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                    aria-label={isPlaying ? 'Jeda Animasi' : 'Putar Animasi'}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-3 rounded-2xl bg-slate-800 border border-white/10 text-white hover:bg-slate-700 active:scale-95 transition-all"
                    aria-label="Tahap Selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Status Teks Playback */}
                <div className="text-xs font-semibold text-slate-400">
                  {isPlaying ? (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Memutar Otomatis
                    </span>
                  ) : (
                    <span>Mode Jeda Manual</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: PANEL INFORMASI TAHAPAN (5 Kolom di Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="glass-card p-6 sm:p-8 border border-white/10 shadow-2xl relative"
              >
                {/* Header Tahapan & Progress Dots */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span
                    className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${currentStage.warna}20`,
                      color: currentStage.warna,
                      border: `1px solid ${currentStage.warna}50`,
                    }}
                  >
                    Tahap {currentStageIndex + 1} dari {totalStages}
                  </span>

                  {/* 6 Dots Indikator Progres */}
                  <div className="flex items-center gap-2">
                    {ANIMATION_STAGES.map((st, i) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => handleSelectStage(i)}
                        className={`transition-all duration-300 rounded-full ${
                          i === currentStageIndex
                            ? 'w-6 h-2.5 rounded-full shadow-lg'
                            : i < currentStageIndex
                            ? 'w-2.5 h-2.5 bg-emerald-700/80 hover:bg-emerald-600'
                            : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                        }`}
                        style={{
                          backgroundColor:
                            i === currentStageIndex ? currentStage.warna : undefined,
                        }}
                        aria-label={`Pilih tahap ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Nama Tahapan */}
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                  {currentStage.nama}
                </h2>

                {/* Lokasi Organ */}
                <p className="text-sm text-slate-400 mb-4 flex items-center gap-1.5 font-medium">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>{currentStage.organ}</span>
                </p>

                {/* Deskripsi Pendek */}
                <div
                  className="p-4 rounded-2xl mb-6 text-sm font-medium leading-relaxed border"
                  style={{
                    backgroundColor: `${currentStage.warna}10`,
                    borderColor: `${currentStage.warna}30`,
                    color: '#f8fafc',
                  }}
                >
                  {currentStage.deskripsi}
                </div>

                {/* Detail Proses Lengkap */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Fisiologi Proses
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-white/5">
                    {currentStage.detailProses}
                  </p>
                </div>

                {/* 3 Poin Penting Bullet List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    3 Poin Penting Biologi
                  </h4>
                  <ul className="space-y-2.5">
                    {currentStage.poinPenting.map((poin, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-800/40 p-3 rounded-xl border border-white/5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: currentStage.warna }}
                        />
                        <span className="leading-relaxed">{poin}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Links Menu Lanjutan */}
            <div className="glass-card p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
              <div className="text-left">
                <p className="text-xs text-slate-400">Siap menguji pemahaman Anda?</p>
                <p className="text-sm font-bold text-white">Praktikum Lab Uji Makanan</p>
              </div>
              <Link
                href="/laboratorium"
                className="w-full sm:w-auto btn-primary text-xs py-2.5 px-4 whitespace-nowrap"
              >
                Buka Laboratorium Virtual
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
