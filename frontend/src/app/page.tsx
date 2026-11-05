'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  PlayCircle,
  FlaskConical,
  Award,
} from 'lucide-react'

// Floating particle configuration
const particles = [
  { id: 1, x: '10%', y: '20%', size: 6, delay: 0, duration: 6 },
  { id: 2, x: '85%', y: '15%', size: 8, delay: 1, duration: 8 },
  { id: 3, x: '25%', y: '75%', size: 5, delay: 2, duration: 7 },
  { id: 4, x: '80%', y: '70%', size: 10, delay: 0.5, duration: 9 },
  { id: 5, x: '50%', y: '90%', size: 7, delay: 1.5, duration: 7.5 },
  { id: 6, x: '15%', y: '45%', size: 4, delay: 2.5, duration: 6.5 },
  { id: 7, x: '70%', y: '35%', size: 6, delay: 3, duration: 8 },
]

export default function LandingPage() {
  return (
    <div className="page-container bg-mesh relative overflow-hidden flex flex-col justify-between min-h-screen text-slate-100">
      {/* Background ambient glowing orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-500/20 via-teal-500/10 to-transparent blur-3xl rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-96 h-96 bg-emerald-600/15 blur-3xl rounded-full" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-emerald-400/30 blur-[1px]"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
            }}
            animate={{
              y: ['0px', '-24px', '0px'],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Top Header / Brand Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/25 border border-emerald-300/30">
            <FlaskConical className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              SISTEM CERNA
            </span>
            <span className="text-xs block text-slate-400 font-medium tracking-wider uppercase">
              Biologi SMA Kelas XI
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:flex items-center gap-2"
        >
          <span className="badge-green text-xs px-3 py-1.5 font-medium tracking-wide shadow-sm">
            Kurikulum Merdeka
          </span>
          <span className="badge-blue text-xs px-3 py-1.5 font-medium tracking-wide shadow-sm">
            Media Digital 2026
          </span>
        </motion.div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin-slow" />
              <span>Media Pembelajaran Fisiologi Manusia</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white">
              SISTEM CERNA{' '}
              <span className="gradient-text drop-shadow-[0_4px_24px_rgba(16,185,129,0.35)]">
                INTERAKTIF
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              Jelajahi keajaiban saluran pencernaan manusia melalui visualisasi anatomi realistis, 
              simulasi proses mekanik dan kimiawi, uji zat makanan di laboratorium virtual, serta kuis evaluasi komprehensif.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/menu"
                className="btn-primary group w-full sm:w-auto text-base sm:text-lg px-8 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold tracking-wide shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span>MULAI KELAS</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/materi"
                className="btn-secondary w-full sm:w-auto text-base px-6 py-4 rounded-2xl flex items-center justify-center gap-2 font-medium hover:text-white hover:border-emerald-500/40"
              >
                <BookOpen className="w-5 h-5 text-emerald-400" />
                <span>Pelajari Silabus</span>
              </Link>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-8 border-t border-slate-800/80 w-full max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4+</p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Topik Inti Biologi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">3D</p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Simulasi & Animasi</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Lab</p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Uji Makanan Virtual</p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic: Anatomical Digestive System SVG illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10" />

            {/* SVG Glass Container */}
            <div className="glass-card relative w-full max-w-[440px] p-6 border border-emerald-500/30 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200 tracking-wide">
                    SKEMA ANATOMI DIGESTIF
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                  Homo sapiens
                </span>
              </div>

              {/* Inline Anatomical SVG */}
              <div className="relative flex justify-center py-2">
                <svg
                  viewBox="0 0 380 480"
                  className="w-full h-auto max-h-[380px] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="mouthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#fb7185" />
                    </linearGradient>
                    <linearGradient id="esophagusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#b91c1c" />
                      <stop offset="100%" stopColor="#991b1b" />
                    </linearGradient>
                    <linearGradient id="pancreasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#eab308" />
                      <stop offset="100%" stopColor="#ca8a04" />
                    </linearGradient>
                    <linearGradient id="intestineSmallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    <linearGradient id="intestineLargeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Body Silhouette */}
                  <path
                    d="M 190 20 
                       C 165 20, 150 40, 150 70 
                       C 150 95, 162 105, 160 115 
                       C 135 125, 90 140, 80 180 
                       C 70 220, 75 320, 75 420 
                       C 110 425, 140 430, 190 430 
                       C 240 430, 270 425, 305 420 
                       C 305 320, 310 220, 300 180 
                       C 290 140, 245 125, 220 115 
                       C 218 105, 230 95, 230 70 
                       C 230 40, 215 20, 190 20 Z"
                    fill="url(#bodyGrad)"
                    stroke="rgba(148, 163, 184, 0.25)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Mulut / Oral Cavity */}
                  <g>
                    <circle cx="190" cy="72" r="11" fill="url(#mouthGrad)" filter="url(#glowFilter)" />
                    <circle cx="190" cy="72" r="4" fill="#ffffff" />
                  </g>

                  {/* Esofagus (Kerongkongan) */}
                  <path
                    d="M 190 83 L 190 170"
                    stroke="url(#esophagusGrad)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    filter="url(#glowFilter)"
                  />

                  {/* Hati (Liver) */}
                  <path
                    d="M 145 175 
                       C 135 165, 175 160, 185 170 
                       C 185 195, 165 210, 145 205 
                       C 130 200, 130 185, 145 175 Z"
                    fill="url(#liverGrad)"
                    opacity="0.9"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />

                  {/* Lambung (Stomach) */}
                  <path
                    d="M 190 170 
                       C 220 170, 235 195, 230 225 
                       C 225 245, 195 245, 185 235 
                       C 180 220, 185 195, 190 170 Z"
                    fill="url(#stomachGrad)"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    filter="url(#glowFilter)"
                  />

                  {/* Pankreas */}
                  <path
                    d="M 175 228 
                       C 195 225, 220 228, 225 238 
                       C 215 245, 185 242, 175 228 Z"
                    fill="url(#pancreasGrad)"
                    stroke="#fde047"
                    strokeWidth="1.5"
                  />

                  {/* Usus Besar (Colon) Framing */}
                  <path
                    d="M 140 330 
                       L 140 250 
                       C 140 240, 240 240, 240 250 
                       L 240 330 
                       L 220 330 
                       L 220 262 
                       L 160 262 
                       L 160 330 Z"
                    fill="url(#intestineLargeGrad)"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    opacity="0.85"
                  />

                  {/* Usus Halus (Small Intestine) - Coiled loops */}
                  <path
                    d="M 165 275 
                       C 185 268, 195 285, 215 275 
                       C 218 290, 165 292, 170 305 
                       C 185 315, 215 310, 210 325 
                       C 190 330, 175 325, 190 340"
                    stroke="url(#intestineSmallGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#glowFilter)"
                  />

                  {/* Rektum & Anus */}
                  <path
                    d="M 190 345 L 190 375"
                    stroke="#94a3b8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />

                  {/* Interactive Organ Callout Pins */}
                  {/* Pin 1: Rongga Mulut */}
                  <g className="transition-all hover:scale-105">
                    <line x1="190" y1="72" x2="270" y2="72" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="270" y="60" width="85" height="24" rx="6" fill="#1e293b" stroke="#f43f5e" strokeWidth="1" />
                    <text x="312" y="76" fill="#fecdd3" fontSize="10" fontWeight="bold" textAnchor="middle">
                      1. Mulut
                    </text>
                  </g>

                  {/* Pin 2: Kerongkongan */}
                  <g className="transition-all hover:scale-105">
                    <line x1="190" y1="125" x2="70" y2="125" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="15" y="113" width="90" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <text x="60" y="129" fill="#bae6fd" fontSize="10" fontWeight="bold" textAnchor="middle">
                      2. Esofagus
                    </text>
                  </g>

                  {/* Pin 3: Lambung */}
                  <g className="transition-all hover:scale-105">
                    <line x1="215" y1="205" x2="280" y2="205" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="280" y="193" width="85" height="24" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                    <text x="322" y="209" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">
                      3. Lambung
                    </text>
                  </g>

                  {/* Pin 4: Usus Halus */}
                  <g className="transition-all hover:scale-105">
                    <line x1="185" y1="300" x2="60" y2="300" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="15" y="288" width="90" height="24" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1" />
                    <text x="60" y="304" fill="#a7f3d0" fontSize="10" fontWeight="bold" textAnchor="middle">
                      4. Usus Halus
                    </text>
                  </g>

                  {/* Pin 5: Usus Besar */}
                  <g className="transition-all hover:scale-105">
                    <line x1="235" y1="310" x2="280" y2="310" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="2 2" />
                    <rect x="280" y="298" width="85" height="24" rx="6" fill="#1e293b" stroke="#06b6d4" strokeWidth="1" />
                    <text x="322" y="314" fill="#a5f3fc" fontSize="10" fontWeight="bold" textAnchor="middle">
                      5. Usus Besar
                    </text>
                  </g>
                </svg>
              </div>

              {/* Organ legend footer */}
              <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Pencernaan Kimiawi
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> Pencernaan Mekanik
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 lg:mt-24"
        >
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Fitur Unggulan Pembelajaran
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Dirancang khusus mempermudah pemahaman konsep biologi secara visual dan aplikatif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="glass-card hover-lift p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 group relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Materi Interaktif
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pelajari struktur organ, fungsi fisiologis, kelenjar pencernaan, serta peranan enzim kunci seperti amilase, pepsin, dan lipase.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-400">
                <span>Eksplorasi Modul</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="glass-card hover-lift p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 group relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/10 rounded-full blur-xl group-hover:bg-teal-500/20 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-4 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Animasi Proses & Peristaltik
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Visualisasikan pergerakan makanan dari bolus di esofagus hingga penyerapan mikroskopis nutrien di vili usus halus langkah demi langkah.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-teal-400">
                <span>Lihat Simulasi</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="glass-card hover-lift p-6 rounded-2xl border border-sky-500/20 hover:border-sky-500/40 group relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all" />
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                Kuis & Evaluasi Belajar
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Uji penguasaan konsep dengan bank soal kurikulum XI SMA, pembahasan jawaban ilmiah instan, serta skor analisis pencapaian materi.
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-sky-400">
                <span>Mulai Latihan</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-slate-800/80 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© 2026 Sistem Cerna Interaktif — Aplikasi Edukasi Biologi SMA Kelas XI</p>
        <div className="flex items-center gap-6">
          <Link href="/menu" className="hover:text-emerald-400 transition-colors">
            Menu Utama
          </Link>
          <Link href="/materi" className="hover:text-emerald-400 transition-colors">
            Materi
          </Link>
          <Link href="/kuis" className="hover:text-emerald-400 transition-colors">
            Kuis
          </Link>
        </div>
      </footer>
    </div>
  )
}
