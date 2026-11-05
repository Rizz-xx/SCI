'use client'

import React, { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FlaskConical,
  Flame,
  Droplets,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Beaker,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'
import { LAB_PENGUJIAN, SAMPEL_MAKANAN } from '@/data/lab-data'
import { JenisPengujian, SampelMakanan, PengujianData } from '@/types/lab'

export default function LaboratoriumVirtualPage() {
  // Tab jenis pengujian aktif: 'amilum' | 'protein' | 'gula'
  const [activeTab, setActiveTab] = useState<JenisPengujian>('amilum')

  // State alur percobaan per tab
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1) // 1=Pilih Sampel, 2=Tambah Reagen, 3=Uji Reaksi, 4=Hasil
  const [isReagentDropped, setIsReagentDropped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progressPercent, setProgressPercent] = useState(0)
  const [isGuideOpen, setIsGuideOpen] = useState(false)

  // Ambil metadata pengujian saat ini
  const currentPengujian: PengujianData =
    LAB_PENGUJIAN.find((p) => p.id === activeTab) || LAB_PENGUJIAN[0]

  // Ambil data sampel terpilih
  const selectedSample: SampelMakanan | undefined = SAMPEL_MAKANAN.find(
    (s) => s.id === selectedSampleId
  )

  // Evaluasi hasil pengujian apakah sampel positif atau negatif
  const isPositive = selectedSample
    ? activeTab === 'amilum'
      ? selectedSample.kandunganAmilum
      : activeTab === 'protein'
      ? selectedSample.kandunganProtein
      : selectedSample.kandunganGula
    : null

  // Warna cairan di tabung reaksi sesuai tahapan
  const getTubeFluidColor = () => {
    if (step < 2) return 'rgba(241, 245, 249, 0.25)' // Ekstrak sampel keruh pucat
    if (step === 2) {
      // Saat baru diteteskan reagen (warna awal reagen)
      if (activeTab === 'amilum') return 'rgba(245, 158, 11, 0.45)' // Lugol kuning-cokelat
      if (activeTab === 'protein') return 'rgba(186, 230, 253, 0.55)' // Biuret biru muda
      return 'rgba(56, 189, 248, 0.55)' // Benedict biru
    }
    if (step === 3) {
      // Saat reaksi berlangsung (pencampuran hangat)
      return 'rgba(20, 184, 166, 0.5)'
    }
    // Step 4: Hasil akhir
    return isPositive ? currentPengujian.warnaCSSPositif : currentPengujian.warnaCSSNegatif
  }

  // Ganti tab pengujian
  const handleSwitchTab = (tabId: JenisPengujian) => {
    setActiveTab(tabId)
    handleReset()
  }

  // Pilih sampel makanan
  const handleSelectSample = (sample: SampelMakanan) => {
    setSelectedSampleId(sample.id)
    setStep(2)
    setIsReagentDropped(false)
  }

  // Teteskan reagen
  const handleAddReagent = () => {
    setIsReagentDropped(true)
    setTimeout(() => {
      setStep(3)
    }, 900)
  }

  // Jalankan proses reaksi pengujian (pemanasan / agitasi)
  const handleRunTest = () => {
    setIsAnimating(true)
    setProgressPercent(0)

    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsAnimating(false)
          setStep(4)
          return 100
        }
        return prev + 10
      })
    }, 180)
  }

  // Reset percobaan
  const handleReset = () => {
    setSelectedSampleId(null)
    setStep(1)
    setIsReagentDropped(false)
    setIsAnimating(false)
    setProgressPercent(0)
  }

  return (
    <main className="page-container min-h-screen pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      {/* Background sci-fi lab ambiance */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <BackButton href="/menu" label="Menu Utama" />
          <div className="flex items-center gap-2">
            <span className="badge-teal flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Laboratorium Virtual</span>
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Simulasi Reaksi Uji Zat Makanan
            </span>
          </div>
        </div>

        {/* Header Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
            Praktikum Uji Zat Makanan
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl">
            Lakukan pengujian biokimia secara virtual untuk mendeteksi kandungan amilum, protein, dan gula pereduksi pada berbagai sampel makanan.
          </p>
        </div>

        {/* 3 Tab Pengujian (Sci-Fi Buttons) */}
        <div className="flex flex-wrap gap-3 mb-8">
          {LAB_PENGUJIAN.map((pengujian) => {
            const isActive = activeTab === pengujian.id
            return (
              <button
                key={pengujian.id}
                type="button"
                onClick={() => handleSwitchTab(pengujian.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400/50 shadow-lg shadow-emerald-950/60 scale-[1.02]'
                    : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <FlaskConical className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-400'}`} />
                <span>{pengujian.nama}</span>
              </button>
            )
          })}
        </div>

        {/* Informasi Uji & Reagen Terpilih */}
        <div className="glass-card-green p-5 sm:p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Uji Aktif:
              </span>
              <h2 className="text-xl font-bold text-white">{currentPengujian.nama}</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              <strong className="text-emerald-300">Reagen:</strong> {currentPengujian.reagen} •{' '}
              <strong className="text-sky-300">Tujuan:</strong> {currentPengujian.tujuan}
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary text-xs py-2 px-4 flex items-center justify-center gap-1.5 w-fit"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Percobaan</span>
          </button>
        </div>

        {/* Workspace 2-Kolom: Kontrol Langkah (Kiri) vs Visual Tabung Reaksi (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* KOLOM KIRI: Alur Step 1 - 4 (7 Kolom Desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step Indicators Header */}
            <div className="glass-card p-4 flex items-center justify-between">
              {[
                { s: 1, label: 'Sampel' },
                { s: 2, label: 'Reagen' },
                { s: 3, label: 'Reaksi' },
                { s: 4, label: 'Hasil' },
              ].map(({ s, label }) => {
                const isCurrent = step === s
                const isPassed = step > s
                return (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        isCurrent
                          ? 'bg-emerald-500 text-white ring-4 ring-emerald-500/20'
                          : isPassed
                          ? 'bg-emerald-800 text-emerald-200'
                          : 'bg-slate-800 text-slate-500 border border-white/5'
                      }`}
                    >
                      {s}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden sm:inline ${
                        isCurrent ? 'text-white' : isPassed ? 'text-emerald-300' : 'text-slate-500'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* STEP 1: PILIH SAMPEL MAKANAN */}
            <div className="glass-card p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                    1
                  </span>
                  Pilih Sampel Bahan Makanan
                </h3>
                {selectedSample && (
                  <span className="text-xs text-emerald-400 font-semibold">
                    Terpilih: {selectedSample.nama} {selectedSample.emoji}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SAMPEL_MAKANAN.map((sampel) => {
                  const isSelected = selectedSampleId === sampel.id
                  return (
                    <button
                      key={sampel.id}
                      type="button"
                      onClick={() => handleSelectSample(sampel)}
                      className={`p-3.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center gap-1.5 group ${
                        isSelected
                          ? 'bg-emerald-500/20 border-emerald-400 shadow-md shadow-emerald-950/40 scale-105'
                          : 'bg-slate-900/60 border-white/5 hover:border-emerald-500/30 hover:bg-slate-800/60'
                      }`}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {sampel.emoji}
                      </span>
                      <span
                        className={`text-xs font-bold ${
                          isSelected ? 'text-emerald-300' : 'text-slate-200'
                        }`}
                      >
                        {sampel.nama}
                      </span>
                    </button>
                  )
                })}
              </div>

              {selectedSample && (
                <p className="mt-4 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-xl border border-white/5 leading-relaxed">
                  💡 <strong>Karakteristik:</strong> {selectedSample.deskripsi}
                </p>
              )}
            </div>

            {/* STEP 2: TAMBAHKAN REAGEN */}
            <div
              className={`glass-card p-6 border transition-all ${
                step >= 2 ? 'border-white/10 opacity-100' : 'border-white/5 opacity-50 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                    2
                  </span>
                  Tambahkan Reagen Uji
                </h3>
                <span className="text-xs text-sky-400 font-semibold">{currentPengujian.reagen}</span>
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Teteskan larutan reagen indikator ke dalam tabung reaksi yang telah berisi sampel makanan halus.
              </p>

              <button
                type="button"
                disabled={step !== 2 || isReagentDropped}
                onClick={handleAddReagent}
                className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Droplets className="w-4 h-4" />
                <span>
                  {isReagentDropped ? 'Reagen Telah Diteteskan...' : `Teteskan ${currentPengujian.reagen.split('(')[0]}`}
                </span>
              </button>
            </div>

            {/* STEP 3: PROSES PERCOBAAN & REAKSI */}
            <div
              className={`glass-card p-6 border transition-all ${
                step >= 3 ? 'border-white/10 opacity-100' : 'border-white/5 opacity-50 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
                    3
                  </span>
                  Proses Pengujian Reaksi
                </h3>
                {activeTab === 'gula' && (
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> Butuh Pemanasan
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {activeTab === 'gula'
                  ? 'Uji Benedict membutuhkan pemanasan dalam penangas air bersuhu 65-80°C selama beberapa menit untuk mempercepat reduksi ion tembaga.'
                  : 'Goyang dan homogenkan larutan secara perlahan agar molekul reagen berikatan sempurna dengan molekul sampel.'}
              </p>

              {isAnimating ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-300 font-medium">
                    <span>
                      {activeTab === 'gula' ? 'Memanaskan penangas air...' : 'Menghomogenkan larutan...'}
                    </span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  disabled={step !== 3}
                  onClick={handleRunTest}
                  className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Beaker className="w-4 h-4" />
                  <span>
                    {activeTab === 'gula' ? 'Panaskan Tabung Reaksi' : 'Lakukan Pengujian & Agitasi'}
                  </span>
                </button>
              )}
            </div>

            {/* STEP 4: HASIL PENGAMATAN & INTERPRETASI */}
            <AnimatePresence>
              {step === 4 && selectedSample && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card p-6 border border-emerald-500/30 bg-slate-900/80 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Step 4: Hasil Pengamatan
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                        isPositive
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {isPositive ? 'Reaksi Positif (+)' : 'Reaksi Negatif (-)'}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <strong className="text-white">Perubahan Warna Larutan:</strong>
                      <span
                        className="font-bold px-2 py-0.5 rounded text-white"
                        style={{
                          backgroundColor: isPositive
                            ? currentPengujian.warnaCSSPositif
                            : currentPengujian.warnaCSSNegatif,
                        }}
                      >
                        {isPositive ? currentPengujian.warnaPositif : currentPengujian.warnaNegatif}
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-emerald-300">Kesimpulan Uji:</strong>{' '}
                      {isPositive
                        ? currentPengujian.kesimpulanPositif
                        : currentPengujian.kesimpulanNegatif}
                    </p>

                    <p className="text-slate-400 leading-relaxed pt-1 border-t border-white/5">
                      <strong className="text-slate-300">Prinsip Ilmiah:</strong> {currentPengujian.prinsip}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Uji Sampel Makanan Lain</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* KOLOM KANAN: Visual Tabung Reaksi Animasi Sci-Fi (5 Kolom Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden min-h-[460px]">
              {/* Status Header Tabung */}
              <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-6">
                <span>Tabung Reaksi Kimia</span>
                <span className="font-mono text-emerald-400 font-bold">
                  {selectedSample ? `${selectedSample.nama}` : 'Kosong'}
                </span>
              </div>

              {/* Pipet Tetes Animasi di Atas Tabung Reaksi */}
              <div className="relative w-full flex flex-col items-center mb-2">
                {isReagentDropped && (
                  <motion.div
                    initial={{ y: -10, opacity: 1, scale: 0.8 }}
                    animate={{ y: 70, opacity: [1, 1, 0], scale: 1.2 }}
                    transition={{ duration: 0.75, ease: 'easeIn' }}
                    className="w-3.5 h-3.5 rounded-full z-20"
                    style={{
                      backgroundColor:
                        activeTab === 'amilum'
                          ? '#f59e0b'
                          : activeTab === 'protein'
                          ? '#38bdf8'
                          : '#0284c7',
                    }}
                  />
                )}
                {/* Visual Pipet */}
                <div className="w-3 h-10 bg-slate-400/40 rounded-t border border-white/20 relative">
                  <div className="w-5 h-4 bg-rose-600/70 rounded-t-full -top-3 -left-1 absolute" />
                </div>
              </div>

              {/* KANVAS TABUNG REAKSI KACA (SVG Rounded Bottom) */}
              <div className="relative w-36 h-64 flex flex-col items-center justify-end">
                {/* Efek Pemanasan Bunsen Api di Bawah jika Uji Gula & Sedang Animasi */}
                {activeTab === 'gula' && (isAnimating || step === 4) && (
                  <div className="absolute -bottom-8 flex flex-col items-center z-0">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-10 h-10 rounded-full bg-amber-500/40 blur-md"
                    />
                    <Flame className="w-8 h-8 text-amber-500 fill-amber-400 -mt-8" />
                  </div>
                )}

                {/* SVG Dinding Kaca Tabung Reaksi */}
                <svg
                  viewBox="0 0 100 200"
                  className="w-full h-full z-10 overflow-visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="glassReflection" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* Cairan di Dalam Tabung Reaksi */}
                  {selectedSample && (
                    <g>
                      {/* Cairan Utama dengan Rounded Bottom */}
                      <path
                        d={
                          step >= 2
                            ? 'M 15 70 L 15 160 C 15 190, 85 190, 85 160 L 85 70 Z'
                            : 'M 15 110 L 15 160 C 15 190, 85 190, 85 160 L 85 110 Z'
                        }
                        fill={getTubeFluidColor()}
                        className="transition-all duration-1000"
                      />

                      {/* Meniskus Permukaan Cairan */}
                      <ellipse
                        cx="50"
                        cy={step >= 2 ? 70 : 110}
                        rx="35"
                        ry="6"
                        fill={getTubeFluidColor()}
                        opacity="0.9"
                        className="transition-all duration-1000"
                      />

                      {/* Partikel Gelembung Saat Proses Animasi / Pemanasan */}
                      {(isAnimating || (activeTab === 'gula' && step === 4)) && (
                        <>
                          <circle cx="35" cy="140" r="2.5" fill="#ffffff" className="bubble-anim" />
                          <circle
                            cx="55"
                            cy="155"
                            r="3"
                            fill="#ffffff"
                            className="bubble-anim"
                            style={{ animationDelay: '0.4s' }}
                          />
                          <circle
                            cx="65"
                            cy="130"
                            r="2"
                            fill="#ffffff"
                            className="bubble-anim"
                            style={{ animationDelay: '0.8s' }}
                          />
                        </>
                      )}
                    </g>
                  )}

                  {/* Dinding Kaca Tabung (Tebal, Rounded Bottom) */}
                  <path
                    d="M 12 10 L 12 160 C 12 195, 88 195, 88 160 L 88 10"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.45)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Mulut Bibir Tabung Reaksi (Flange Atas) */}
                  <ellipse
                    cx="50"
                    cy="10"
                    rx="42"
                    ry="6"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth="3.5"
                  />

                  {/* Garis-Garis Skala Mililiter (Graduation Marks) */}
                  <line x1="75" y1="50" x2="85" y2="50" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                  <line x1="78" y1="70" x2="85" y2="70" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  <line x1="75" y1="90" x2="85" y2="90" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
                  <line x1="78" y1="110" x2="85" y2="110" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                  <line x1="75" y1="130" x2="85" y2="130" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />

                  {/* Kilau Refleksi Kaca */}
                  <path
                    d="M 22 25 L 22 155 C 22 175, 40 185, 40 185"
                    fill="none"
                    stroke="url(#glassReflection)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Teks Status Cairan */}
              <div className="mt-8 text-center">
                <span className="text-xs text-slate-400 block mb-1">Status Larutan Tabung:</span>
                <span className="text-sm font-bold text-white">
                  {step === 1 && (selectedSample ? 'Ekstrak sampel disiapkan' : 'Menunggu pemilihan sampel')}
                  {step === 2 && 'Reagen ditambahkan ke sampel'}
                  {step === 3 && 'Reaksi kimiawi sedang berlangsung'}
                  {step === 4 && (
                    <span
                      className="font-black px-2 py-0.5 rounded"
                      style={{
                        color: isPositive
                          ? currentPengujian.warnaCSSPositif === '#1a237e'
                            ? '#93c5fd'
                            : '#a7f3d0'
                          : '#fed7aa',
                      }}
                    >
                      {isPositive ? currentPengujian.warnaPositif : currentPengujian.warnaNegatif}
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Disclaimer Praktikum */}
            <p className="text-[11px] text-slate-500 text-center italic">
              * Simulasi virtual laboratorium ini dirancang untuk tujuan pembelajaran biokimia interaktif SMA Kelas XI.
            </p>
          </div>
        </div>

        {/* Panel Panduan Praktikum (Collapsible Accordion) */}
        <div className="glass-card p-6 border border-white/10">
          <button
            type="button"
            onClick={() => setIsGuideOpen(!isGuideOpen)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Buku Panduan & Tabel Reaksi Reagen Biologi
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span>{isGuideOpen ? 'Sembunyikan Panduan' : 'Buka Panduan'}</span>
              {isGuideOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {isGuideOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 pt-6 border-t border-white/10 space-y-4 text-xs sm:text-sm text-slate-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-bold text-white text-emerald-300 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4" /> Uji Amilum (Lugol)
                  </h4>
                  <p className="text-slate-400">
                    Reagen Lugol (Iodium) bereaksi dengan molekul heliks amilosa membentuk warna <strong>Biru Kehitaman</strong>. Jika sampel tidak mengandung amilum, larutan tetap berwarna kuning/cokelat asal iodin.
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-bold text-white text-purple-300 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4" /> Uji Protein (Biuret)
                  </h4>
                  <p className="text-slate-400">
                    Reagen Biuret (campuran NaOH basa + CuSO4 encer) bereaksi dengan ikatan peptida protein membentuk kompleks koordinasi Cu2+ berwarna <strong>Ungu Violet</strong>. Jika negatif, larutan tetap biru muda jernih.
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-bold text-white text-red-300 flex items-center gap-1.5">
                    <Flame className="w-4 h-4" /> Uji Gula (Benedict)
                  </h4>
                  <p className="text-slate-400">
                    Gula pereduksi (glukosa, fruktosa, maltosa) mereduksi ion Cu2+ saat dipanaskan menghasilkan endapan tembaga(I) oksida berwarna <strong>Merah Bata / Oranye</strong>. Jika negatif, warna tetap biru.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  )
}
