'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Layers,
  Activity,
  Sparkles,
  Network,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Info,
  X,
  Search,
  Droplets,
  Dna,
  Zap,
  Clock,
  Compass,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ORGAN_DATA, OrganData } from '@/data/materi-organ'
import { PROSES_DATA, ProsesData } from '@/data/materi-proses'
import { ENZIM_DATA, EnzimData } from '@/data/materi-enzim'
import { PENYERAPAN_DATA } from '@/data/materi-penyerapan'

// Daftar urutan slug untuk navigasi Prev/Next
const SLUG_ORDER = [
  { slug: 'organ', title: 'Organ Sistem Pencernaan', icon: Layers },
  { slug: 'proses', title: 'Pencernaan Mekanik & Kimiawi', icon: Activity },
  { slug: 'enzim', title: 'Katalog Enzim Pencernaan', icon: Sparkles },
  { slug: 'penyerapan', title: 'Penyerapan Nutrisi di Vili Usus', icon: Network },
]

export default function MateriDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string

  const [isLoading, setIsLoading] = useState(true)
  const [selectedOrgan, setSelectedOrgan] = useState<OrganData | null>(null)
  const [organFilter, setOrganFilter] = useState<'semua' | 'utama' | 'pendukung'>('semua')
  const [activeProsesTab, setActiveProsesTab] = useState<'pencernaan-mekanik' | 'pencernaan-kimiawi'>('pencernaan-mekanik')
  const [enzimSearch, setEnzimSearch] = useState('')
  const [enzimOrganFilter, setEnzimOrganFilter] = useState('semua')
  const [expandedEnzimId, setExpandedEnzimId] = useState<string | null>(null)
  const [selectedViliPart, setSelectedViliPart] = useState<'mikrovili' | 'kapiler' | 'lakteal' | 'enterosit' | null>(null)

  useEffect(() => {
    // Simulasi inisialisasi modul
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 250)
    return () => clearTimeout(timer)
  }, [slug])

  // Menentukan indeks slug saat ini untuk tombol prev & next
  const currentIndex = SLUG_ORDER.findIndex((item) => item.slug === slug)
  const prevModule = currentIndex > 0 ? SLUG_ORDER[currentIndex - 1] : null
  const nextModule = currentIndex >= 0 && currentIndex < SLUG_ORDER.length - 1 ? SLUG_ORDER[currentIndex + 1] : null
  const currentModule = currentIndex >= 0 ? SLUG_ORDER[currentIndex] : null

  // Filter daftar organ
  const filteredOrgans = useMemo(() => {
    if (organFilter === 'semua') return ORGAN_DATA
    return ORGAN_DATA.filter((o) => o.kategori === organFilter)
  }, [organFilter])

  // Filter daftar enzim
  const filteredEnzim = useMemo(() => {
    return ENZIM_DATA.filter((e) => {
      const matchSearch =
        e.nama.toLowerCase().includes(enzimSearch.toLowerCase()) ||
        (e.namaLain && e.namaLain.toLowerCase().includes(enzimSearch.toLowerCase())) ||
        e.substrat.toLowerCase().includes(enzimSearch.toLowerCase()) ||
        e.produk.toLowerCase().includes(enzimSearch.toLowerCase()) ||
        e.bekerjadiOrgan.toLowerCase().includes(enzimSearch.toLowerCase())
      const matchOrgan =
        enzimOrganFilter === 'semua' || e.bekerjadiOrgan.toLowerCase().includes(enzimOrganFilter.toLowerCase())
      return matchSearch && matchOrgan
    })
  }, [enzimSearch, enzimOrganFilter])

  if (isLoading) {
    return (
      <main className="page-container min-h-screen flex items-center justify-center p-4">
        <LoadingSpinner size="lg" text="Memuat materi sistem pencernaan..." />
      </main>
    )
  }

  // Jika slug tidak valid
  if (currentIndex === -1) {
    return (
      <main className="page-container min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto glass-card p-8 text-center border border-rose-500/30">
          <Info className="w-16 h-16 text-rose-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Modul Materi Tidak Ditemukan</h1>
          <p className="text-slate-400 mb-6">
            Materi dengan rute &quot;{slug}&quot; belum tersedia atau tautan tidak valid.
          </p>
          <BackButton href="/materi" label="Kembali ke Daftar Materi" className="btn-primary" />
        </div>
      </main>
    )
  }

  return (
    <main className="page-container min-h-screen pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      {/* Background Glow Ambiance */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar & Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <BackButton href="/materi" label="Daftar Modul" />
          <div className="flex items-center gap-2">
            <span className="badge-green">
              Modul {currentIndex + 1} dari {SLUG_ORDER.length}
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              Biologi SMA Kelas XI
            </span>
          </div>
        </div>

        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center sm:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            {React.createElement(currentModule?.icon || BookOpen, { className: 'w-4 h-4' })}
            <span>Pembahasan Mendalam</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            {currentModule?.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            {slug === 'organ' &&
              'Eksplorasi anatomi dan peran fisiologis setiap organ dalam saluran utama dan kelenjar pencernaan manusia.'}
            {slug === 'proses' &&
              'Pelajari perbandingan komprehensif antara mekanisme penghancuran mekanis dan reaksi enzimatis kimiawi.'}
            {slug === 'enzim' &&
              'Daftar lengkap biokatalisator sistem pencernaan, organ penghasil, kondisi pH optimal, dan substrat reaksi.'}
            {slug === 'penyerapan' &&
              'Arsitektur vili dan mikrovili usus halus serta rute sirkulasi penyerapan sari makanan ke seluruh tubuh.'}
          </p>
        </motion.div>

        {/* =========================================================================
            SLUG 1: ORGAN PENCERNAAN
           ========================================================================= */}
        {slug === 'organ' && (
          <div className="space-y-8">
            {/* Filter Kategori */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/5 w-fit">
              <button
                type="button"
                onClick={() => setOrganFilter('semua')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  organFilter === 'semua'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Semua Organ ({ORGAN_DATA.length})
              </button>
              <button
                type="button"
                onClick={() => setOrganFilter('utama')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  organFilter === 'utama'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Saluran Utama (6)
              </button>
              <button
                type="button"
                onClick={() => setOrganFilter('pendukung')}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  organFilter === 'pendukung'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-950/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Kelenjar Aksesori (3)
              </button>
            </div>

            {/* Grid 3 Kolom Kartu Organ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOrgans.map((organ, idx) => (
                <motion.div
                  key={organ.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  onClick={() => setSelectedOrgan(organ)}
                  className="glass-card p-6 cursor-pointer group hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        organ.kategori === 'utama'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                      }`}
                    >
                      {organ.kategori === 'utama' ? 'Saluran Utama' : 'Kelenjar Aksesori'}
                    </span>
                  </div>

                  <div>
                    {/* Emoji & Judul */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                        {organ.ikonEmoji}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {organ.nama}
                        </h3>
                        <p className="text-xs text-slate-400 italic">{organ.namaLatin}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                      {organ.deskripsi}
                    </p>

                    {/* Fungsi Singkat */}
                    <div className="space-y-2 mb-6">
                      <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                        Fungsi Kunci:
                      </p>
                      <ul className="space-y-1.5">
                        {organ.fungsiUtama.slice(0, 2).map((fn, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{fn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tombol Aksi Detail */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                    <span>Pelajari Fisiologi Lengkap</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Modal Detail Organ */}
            <AnimatePresence>
              {selectedOrgan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-emerald-500/30 relative"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedOrgan(null)}
                      className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      aria-label="Tutup Detail"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-4xl">
                        {selectedOrgan.ikonEmoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-2xl font-black text-white">{selectedOrgan.nama}</h2>
                          <span className="badge-green text-xs capitalize">{selectedOrgan.kategori}</span>
                        </div>
                        <p className="text-sm text-slate-400 italic">{selectedOrgan.namaLatin}</p>
                      </div>
                    </div>

                    <div className="space-y-6 text-sm text-slate-300">
                      <div>
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-base">
                          <BookOpen className="w-4 h-4 text-emerald-400" />
                          Deskripsi Fisiologis
                        </h4>
                        <p className="leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-white/5">
                          {selectedOrgan.deskripsi}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-base">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          Fungsi-Fungsi Utama
                        </h4>
                        <ul className="space-y-2 bg-slate-800/40 p-4 rounded-xl border border-white/5">
                          {selectedOrgan.fungsiUtama.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-base">
                          <Activity className="w-4 h-4 text-teal-400" />
                          Mekanisme Proses Pencernaan
                        </h4>
                        <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5 whitespace-pre-line leading-relaxed text-slate-300">
                          {selectedOrgan.prosesDigesti}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-slate-800/40 p-3.5 rounded-xl border border-white/5">
                          <p className="text-xs text-slate-400 font-semibold mb-1">Lokasi Tubuh</p>
                          <p className="text-xs text-white">{selectedOrgan.lokasiTubuh}</p>
                        </div>
                        <div className="bg-slate-800/40 p-3.5 rounded-xl border border-white/5">
                          <p className="text-xs text-slate-400 font-semibold mb-1">Ukuran / Kapasitas</p>
                          <p className="text-xs text-white">{selectedOrgan.ukuran}</p>
                        </div>
                      </div>

                      <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-amber-300 text-xs uppercase tracking-wider mb-1">
                            Fakta Menarik Sains
                          </p>
                          <p className="text-xs text-amber-200/90 leading-relaxed">
                            {selectedOrgan.faktaMenarik}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setSelectedOrgan(null)}
                        className="btn-secondary text-sm py-2 px-5"
                      >
                        Tutup
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* =========================================================================
            SLUG 2: PROSES PENCERNAAN MEKANIK & KIMIAWI
           ========================================================================= */}
        {slug === 'proses' && (
          <div className="space-y-8">
            {/* Tab Selector Mekanik vs Kimiawi */}
            <div className="flex border-b border-white/10 gap-4 sm:gap-8">
              {PROSES_DATA.map((proses) => {
                const isActive = activeProsesTab === proses.slug
                return (
                  <button
                    key={proses.id}
                    type="button"
                    onClick={() => setActiveProsesTab(proses.slug as any)}
                    className={`pb-4 px-2 text-base sm:text-lg font-bold transition-all relative flex items-center gap-2 ${
                      isActive ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {proses.slug === 'pencernaan-mekanik' ? (
                      <Activity className="w-5 h-5" />
                    ) : (
                      <Zap className="w-5 h-5" />
                    )}
                    <span>{proses.nama}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-sky-500"
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Konten Tab Aktif */}
            {PROSES_DATA.filter((p) => p.slug === activeProsesTab).map((proses) => (
              <motion.div
                key={proses.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Definisi Card */}
                <div className="glass-card-green p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge-green">Konsep Fisiologi</span>
                    <span className="text-xs text-slate-300">Biologi SMA</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{proses.nama}</h3>
                  <p className="text-base text-slate-200 leading-relaxed">{proses.definisi}</p>
                </div>

                {/* Grid Contoh Proses & Organ Terlibat */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Contoh Proses */}
                  <div className="glass-card p-6">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      Tahapan & Contoh Proses
                    </h4>
                    <ul className="space-y-3">
                      {proses.contohProses.map((ex, i) => (
                        <li key={i} className="flex items-start gap-3 bg-slate-800/40 p-3.5 rounded-xl border border-white/5 text-sm text-slate-300">
                          <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Organ Terlibat & Perbedaan */}
                  <div className="space-y-6">
                    <div className="glass-card p-6">
                      <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-sky-400" />
                        Organ-Organ yang Berperan
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proses.organTerlibat.map((org, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-sky-500/30 text-sky-200 text-xs font-medium"
                          >
                            {org}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 border-amber-500/30 bg-amber-950/15">
                      <h4 className="text-lg font-bold text-amber-300 mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-400" />
                        Perbedaan Prinsipil
                      </h4>
                      <p className="text-sm text-amber-100/90 leading-relaxed">
                        {proses.perbedaanDenganLainnya}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Penjelasan Naratif Lengkap */}
                <div className="glass-card p-6 sm:p-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-400" />
                    Uraian Mekanisme Fisiologi Lengkap
                  </h4>
                  <div className="text-sm sm:text-base text-slate-300 space-y-4 leading-relaxed whitespace-pre-line bg-slate-900/40 p-6 rounded-2xl border border-white/5">
                    {proses.penjelasanLengkap}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* =========================================================================
            SLUG 3: KATALOG ENZIM PENCERNAAN
           ========================================================================= */}
        {slug === 'enzim' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari enzim, substrat, produk..."
                  value={enzimSearch}
                  onChange={(e) => setEnzimSearch(e.target.value)}
                  className="w-full bg-slate-900/70 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-400 font-semibold whitespace-nowrap">
                  Organ Bekerja:
                </span>
                <select
                  value={enzimOrganFilter}
                  onChange={(e) => setEnzimOrganFilter(e.target.value)}
                  className="bg-slate-900/70 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="semua">Semua Organ</option>
                  <option value="mulut">Mulut</option>
                  <option value="lambung">Lambung</option>
                  <option value="usus">Usus Halus / Duodenum</option>
                </select>
              </div>
            </div>

            {/* Tabel Responsif Enzim */}
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900/80 border-b border-white/10 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">Nama Enzim</th>
                      <th className="py-4 px-4 sm:px-6">Organ Penghasil / Tempat Kerja</th>
                      <th className="py-4 px-4 sm:px-6">Substrat</th>
                      <th className="py-4 px-4 sm:px-6">Produk Akhir</th>
                      <th className="py-4 px-4 sm:px-6">pH Optimal</th>
                      <th className="py-4 px-4 sm:px-6 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredEnzim.map((enzim) => {
                      const isExpanded = expandedEnzimId === enzim.id
                      return (
                        <React.Fragment key={enzim.id}>
                          <tr
                            onClick={() =>
                              setExpandedEnzimId(isExpanded ? null : enzim.id)
                            }
                            className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                          >
                            <td className="py-4 px-4 sm:px-6">
                              <div className="font-bold text-white text-base">{enzim.nama}</div>
                              {enzim.namaLain && (
                                <div className="text-xs text-slate-400 italic">
                                  Alias: {enzim.namaLain}
                                </div>
                              )}
                            </td>
                            <td className="py-4 px-4 sm:px-6 text-slate-300">
                              <div className="font-medium text-emerald-300">
                                {enzim.bekerjadiOrgan}
                              </div>
                              <div className="text-xs text-slate-400">
                                Dari: {enzim.dihasilkanOleh}
                              </div>
                            </td>
                            <td className="py-4 px-4 sm:px-6">
                              <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
                                {enzim.substrat}
                              </span>
                            </td>
                            <td className="py-4 px-4 sm:px-6">
                              <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-medium">
                                {enzim.produk}
                              </span>
                            </td>
                            <td className="py-4 px-4 sm:px-6 text-slate-300 font-mono text-xs">
                              {enzim.phOptimal}
                            </td>
                            <td className="py-4 px-4 sm:px-6 text-center">
                              <button
                                type="button"
                                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                              >
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                            </td>
                          </tr>

                          {/* Accordion Baris Expandable */}
                          {isExpanded && (
                            <tr className="bg-slate-900/60">
                              <td colSpan={6} className="p-6">
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="space-y-4 text-sm text-slate-300"
                                >
                                  <div>
                                    <h5 className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                                      <Info className="w-4 h-4" />
                                      Peran & Fungsi Biokimiawi
                                    </h5>
                                    <p className="leading-relaxed bg-slate-800/40 p-4 rounded-xl border border-white/5">
                                      {enzim.fungsiLengkap}
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5">
                                      <p className="text-xs font-semibold text-slate-400 mb-1">
                                        Reaksi Kimia Hidrolisis:
                                      </p>
                                      <code className="text-xs text-sky-300 font-mono block break-all">
                                        {enzim.reaksiKimia}
                                      </code>
                                    </div>
                                    <div className="bg-slate-800/40 p-4 rounded-xl border border-white/5">
                                      <p className="text-xs font-semibold text-slate-400 mb-1">
                                        Contoh Bahan Makanan Terkait:
                                      </p>
                                      <p className="text-xs text-white">
                                        {enzim.contohMakanan?.join(', ') || 'Berbagai sumber makronutrien'}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              {filteredEnzim.length === 0 && (
                <div className="p-8 text-center text-slate-400">
                  Tidak ada enzim yang sesuai dengan pencarian atau filter Anda.
                </div>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            SLUG 4: PENYERAPAN NUTRISI & ANATOMI VILI
           ========================================================================= */}
        {slug === 'penyerapan' && (
          <div className="space-y-10">
            {/* Narasi Pengantar */}
            <div className="glass-card-green p-6 sm:p-8">
              <span className="badge-green mb-3">Absorpsi Nutrisi</span>
              <h3 className="text-2xl font-bold text-white mb-3">{PENYERAPAN_DATA.judul}</h3>
              <p className="text-base text-slate-200 leading-relaxed">
                {PENYERAPAN_DATA.deskripsi}
              </p>
            </div>

            {/* Ilustrasi Vili Usus Halus (SVG Interaktif) */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Dna className="w-5 h-5 text-emerald-400" />
                    Anatomi Mikroskopis Vili Usus Halus
                  </h4>
                  <p className="text-xs text-slate-400">
                    Klik komponen vili di bawah untuk melihat rincian fungsi fisiologisnya
                  </p>
                </div>

                {/* Legenda Warna */}
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedViliPart('mikrovili')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                      selectedViliPart === 'mikrovili'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span>Mikrovili</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedViliPart('kapiler')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                      selectedViliPart === 'kapiler'
                        ? 'bg-rose-500/20 border-rose-400 text-rose-300'
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span>Kapiler Darah</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedViliPart('lakteal')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                      selectedViliPart === 'lakteal'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'border-white/10 text-slate-400'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span>Pembuluh Kil (Lakteal)</span>
                  </button>
                </div>
              </div>

              {/* Kanvas Diagram SVG Vili */}
              <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-white/10 flex flex-col items-center">
                <svg
                  viewBox="0 0 600 360"
                  className="w-full max-w-2xl h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="viliGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1e293b" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="capillaryArtery" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f87171" />
                    </linearGradient>
                    <linearGradient id="capillaryVein" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>

                  {/* Lapisan Dinding Vili */}
                  <path
                    d="M 120 340 C 130 180, 160 40, 240 40 C 320 40, 350 180, 360 340 Z"
                    fill="url(#viliGradient)"
                    stroke="#10b981"
                    strokeWidth="3"
                  />

                  {/* Vili Sebelah Kanan (Konteks Jamak) */}
                  <path
                    d="M 370 340 C 380 200, 400 80, 460 80 C 520 80, 540 200, 550 340 Z"
                    fill="url(#viliGradient)"
                    stroke="#10b981"
                    strokeWidth="2"
                    opacity="0.4"
                  />

                  {/* Mikrovili di sepanjang batas enterosit luar */}
                  <path
                    d="M 115 340 Q 135 180 155 45 Q 240 30 325 45 Q 345 180 365 340"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="6"
                    strokeDasharray="3 3"
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => setSelectedViliPart('mikrovili')}
                  />

                  {/* Pembuluh Kil / Lakteal di Tengah (Kuning Emas) */}
                  <path
                    d="M 230 340 L 230 130 C 230 110, 250 110, 250 130 L 250 340 Z"
                    fill="#fbbf24"
                    fillOpacity="0.75"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    className="cursor-pointer hover:brightness-125"
                    onClick={() => setSelectedViliPart('lakteal')}
                  />

                  {/* Anyaman Kapiler Darah Arteri (Merah) & Vena (Biru) melingkari lakteal */}
                  <path
                    d="M 205 340 C 200 240, 220 180, 210 120 C 220 90, 260 90, 270 120 C 260 180, 280 240, 275 340"
                    fill="none"
                    stroke="url(#capillaryArtery)"
                    strokeWidth="3.5"
                    className="cursor-pointer"
                    onClick={() => setSelectedViliPart('kapiler')}
                  />
                  <path
                    d="M 215 340 C 220 250, 195 200, 215 150 C 230 110, 250 110, 265 150 C 285 200, 260 250, 265 340"
                    fill="none"
                    stroke="url(#capillaryVein)"
                    strokeWidth="3"
                    strokeDasharray="6 2"
                    className="cursor-pointer"
                    onClick={() => setSelectedViliPart('kapiler')}
                  />

                  {/* Sel Goblet Mukus (Titik Hijau Pucat) */}
                  <circle cx="160" cy="180" r="7" fill="#6ee7b7" />
                  <circle cx="320" cy="190" r="7" fill="#6ee7b7" />
                  <circle cx="210" cy="65" r="7" fill="#6ee7b7" />

                  {/* Labels Teks dalam SVG */}
                  <text x="240" y="25" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">
                    Mikrovili (Brush Border)
                  </text>
                  <text x="240" y="150" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Lakteal (Kil)
                  </text>
                  <text x="140" y="270" fill="#fca5a5" fontSize="11" fontWeight="bold">
                    Kapiler Darah
                  </text>
                  <text x="240" y="355" fill="#94a3b8" fontSize="12" textAnchor="middle">
                    Jaringan Submukosa & Aliran Vena Porta
                  </text>
                </svg>

                {/* Deskripsi Interaktif Bagian Vili */}
                <div className="w-full mt-4 p-4 rounded-xl bg-slate-800/60 border border-white/5 text-xs text-slate-300">
                  {selectedViliPart === 'mikrovili' && (
                    <p className="text-emerald-300 font-medium">
                      ✨ <strong>Mikrovili (Brush Border):</strong> Jutaan juluran sitoplasma enterosit yang memperluas area penyerapan hingga 200-300 m² serta kaya enzim pemecah disakarida dan peptida.
                    </p>
                  )}
                  {selectedViliPart === 'kapiler' && (
                    <p className="text-rose-300 font-medium">
                      🩸 <strong>Anyaman Kapiler Darah:</strong> Menyerap nutrien larut air (glukosa, asam amino, vitamin B & C, mineral) dan mengalirkannya menuju hati via Vena Porta Hepatika.
                    </p>
                  )}
                  {selectedViliPart === 'lakteal' && (
                    <p className="text-amber-300 font-medium">
                      🥛 <strong>Pembuluh Kil (Lakteal Limfa):</strong> Saluran limfatik berujung buntu di inti vili yang menyerap partikel lipid teremulsi (kilomikron) menuju Duktus Torasikus.
                    </p>
                  )}
                  {!selectedViliPart && (
                    <p className="text-slate-400 italic text-center">
                      Tip: Klik tombol legenda di atas atau komponen diagram vili untuk membaca peran khususnya.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Rute Penyaluran Hasil: Darah vs Limfa */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass-card p-6 border-sky-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                    🩸
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Rute Vena Porta Hepatika</h4>
                    <p className="text-xs text-sky-300 font-medium">Untuk Nutrisi Larut Air</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Glukosa, asam amino, vitamin C, vitamin B kompleks, dan ion mineral diserap menembus endotelium kapiler vili usus. Seluruhnya dikumpulkan melalui Vena Porta Hepatika menuju <strong>Hati (Hepar)</strong> untuk proses metabolisme, penyimpanan cadangan glikogen, dan detoksifikasi sebelum diedarkan ke seluruh tubuh.
                </p>
                <span className="badge-blue text-xs">Jalur: Vili → Vena Porta → Hati → Jantung</span>
              </div>

              <div className="glass-card p-6 border-amber-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    🥛
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Rute Pembuluh Kil (Lakteal)</h4>
                    <p className="text-xs text-amber-300 font-medium">Untuk Nutrisi Larut Lemak</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Asam lemak dan monogliserida dirakit kembali di enterosit menjadi partikel <strong>Kilomikron</strong>. Karena berukuran besar, kilomikron dialirkan ke pembuluh lakteal limfa, berkumpul di sisterna kili, naik lewat <strong>Duktus Torasikus</strong>, dan bermuara ke Vena Subklavia Sinistra dekat jantung tanpa melewati filter hati terlebih dahulu.
                </p>
                <span className="badge-teal text-xs">Jalur: Lakteal → Duktus Torasikus → Vena Subklavia</span>
              </div>
            </div>

            {/* Tabel Rincian Zat yang Diserap */}
            <div className="glass-card p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" />
                Mekanisme Penyerapan per Jenis Nutrisi
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PENYERAPAN_DATA.zatYangDiserap.map((zat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-800/40 border border-white/5 space-y-2 hover:border-emerald-500/30 transition-colors"
                  >
                    <h5 className="font-bold text-white text-sm text-emerald-300">{zat.nama}</h5>
                    <div className="text-xs text-slate-300 space-y-1">
                      <p>
                        <strong className="text-slate-400">Mekanisme:</strong> {zat.mekanisme}
                      </p>
                      <p>
                        <strong className="text-slate-400">Tujuan Edar:</strong> {zat.tujuan}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fakta Penting Penyerapan */}
            <div className="glass-card p-6 border-emerald-500/30 bg-emerald-950/15">
              <h4 className="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Fakta Kunci Penyerapan Nutrisi
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/90">
                {PENYERAPAN_DATA.faktaPenting.map((fakta, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{fakta}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* =========================================================================
            NAVIGASI PREV & NEXT ANTAR MODUL SLUG
           ========================================================================= */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevModule ? (
            <Link
              href={`/materi/${prevModule.slug}`}
              className="w-full sm:w-auto btn-secondary text-sm flex items-center justify-center gap-2 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Sebelumnya</div>
                <div className="font-bold text-white text-xs sm:text-sm">{prevModule.title}</div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextModule ? (
            <Link
              href={`/materi/${nextModule.slug}`}
              className="w-full sm:w-auto btn-primary text-sm flex items-center justify-center gap-3 group ml-auto"
            >
              <div className="text-right">
                <div className="text-[10px] text-emerald-200 uppercase tracking-wider">Selanjutnya</div>
                <div className="font-bold text-white text-xs sm:text-sm">{nextModule.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              href="/animasi"
              className="w-full sm:w-auto btn-primary text-sm flex items-center justify-center gap-3 group ml-auto"
            >
              <div className="text-right">
                <div className="text-[10px] text-emerald-200 uppercase tracking-wider">Eksplorasi Lanjutan</div>
                <div className="font-bold text-white text-xs sm:text-sm">Buka Simulasi Animasi 3D</div>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
