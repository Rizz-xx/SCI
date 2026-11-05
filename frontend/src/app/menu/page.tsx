'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import {
  BookOpen,
  PlayCircle,
  FlaskConical,
  ClipboardList,
  Sparkles,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'

interface MenuCardItem {
  id: string
  title: string
  subtitle: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge: string
  color: {
    border: string
    hoverBorder: string
    bgGlow: string
    iconBg: string
    iconColor: string
    accentColor: string
    badgeClass: string
  }
  features: string[]
}

const menuItems: MenuCardItem[] = [
  {
    id: 'materi',
    title: 'Materi Pembelajaran',
    subtitle: 'Konsep & Teori Fisiologi',
    description:
      'Pelajari secara mendalam anatomi organ pencernaan, tahapan pencernaan mekanis & kimiawi, enzim pencernaan, hingga mekanisme penyerapan nutrisi.',
    href: '/materi',
    icon: BookOpen,
    badge: '4 Modul Lengkap',
    color: {
      border: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400/60',
      bgGlow: 'from-emerald-500/15 via-emerald-600/5 to-transparent',
      iconBg: 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400',
      iconColor: 'text-emerald-400',
      accentColor: 'text-emerald-300',
      badgeClass: 'badge-green',
    },
    features: ['Organ Pencernaan', 'Mekanisme & Jalur', 'Katalog Enzim & pH', 'Vili Usus Halus'],
  },
  {
    id: 'animasi',
    title: 'Animasi Proses Pencernaan',
    subtitle: 'Visualisasi Gerak & Fase',
    description:
      'Saksikan perjalanan bolus makanan melalui gerak peristaltik esofagus, pencernaan kimus di lambung, hingga penguraian enzimatik di usus halus.',
    href: '/animasi',
    icon: PlayCircle,
    badge: 'Simulasi Dinamis',
    color: {
      border: 'border-sky-500/30',
      hoverBorder: 'hover:border-sky-400/60',
      bgGlow: 'from-sky-500/15 via-sky-600/5 to-transparent',
      iconBg: 'bg-sky-500/15 border border-sky-500/30 text-sky-400',
      iconColor: 'text-sky-400',
      accentColor: 'text-sky-300',
      badgeClass: 'badge-blue',
    },
    features: ['Kontrol Kecepatan', 'Jalur Bolus Realtime', 'Fase Peristaltik', 'Mikroskopis Enzim'],
  },
  {
    id: 'laboratorium',
    title: 'Laboratorium Virtual',
    subtitle: 'Praktikum Uji Makanan',
    description:
      'Lakukan uji biokimiawi zat makanan secara virtual dengan reagen Lugol (amilum), Biuret (protein), Benedict (glukosa), dan uji lemak dengan kertas buram.',
    href: '/laboratorium',
    icon: FlaskConical,
    badge: 'Praktikum Mandiri',
    color: {
      border: 'border-teal-500/30',
      hoverBorder: 'hover:border-teal-400/60',
      bgGlow: 'from-teal-500/15 via-teal-600/5 to-transparent',
      iconBg: 'bg-teal-500/15 border border-teal-500/30 text-teal-300',
      iconColor: 'text-teal-300',
      accentColor: 'text-teal-200',
      badgeClass: 'badge-teal',
    },
    features: ['Uji Lugol Amilum', 'Uji Biuret Protein', 'Uji Benedict Glukosa', 'Perubahan Warna'],
  },
  {
    id: 'kuis',
    title: 'Kuis Interaktif',
    subtitle: 'Evaluasi & Uji Pemahaman',
    description:
      'Uji pemahaman komprehensif konsep biologi sistem pencernaan SMA dengan soal-soal kurikulum, pembahasan otomatis, serta pencatatan skor pencapaian.',
    href: '/kuis',
    icon: ClipboardList,
    badge: 'Penilaian Otomatis',
    color: {
      border: 'border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-400/60',
      bgGlow: 'from-indigo-500/15 via-indigo-600/5 to-transparent',
      iconBg: 'bg-indigo-500/15 border border-indigo-500/30 text-indigo-400',
      iconColor: 'text-indigo-400',
      accentColor: 'text-indigo-300',
      badgeClass: 'badge-blue',
    },
    features: ['Bank Soal Pilihan', 'Feedback Jawaban', 'Penghitungan Nilai', 'Analisis Ketuntasan'],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function MenuPage() {
  return (
    <div className="page-container bg-mesh min-h-screen text-slate-100 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl -z-10" />

      {/* Top Bar Navigation */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between pb-6 mb-4 border-b border-slate-800/80">
        <BackButton href="/" label="Beranda" />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline-block">
            Biologi Kelas XI SMA
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center my-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pusat Navigasi Belajar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Menu <span className="gradient-text">Utama</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Pilih modul pembelajaran di bawah ini untuk memulai petualangan memahami sistem pencernaan manusia secara interaktif.
          </p>
        </div>

        {/* 2x2 Grid of Cards with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`group relative block h-full glass-card p-6 sm:p-8 rounded-3xl border ${item.color.border} ${item.color.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 shadow-xl overflow-hidden`}
                >
                  {/* Subtle Gradient Backlight on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Header inside Card */}
                  <div className="relative z-10 flex items-start justify-between mb-5">
                    {/* Big Lucide Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl ${item.color.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-emerald-500/20 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 stroke-[2.2]" />
                    </div>

                    <span className={`${item.color.badgeClass} shadow-sm font-semibold`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="relative z-10 mb-3">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block mb-1">
                      {item.subtitle}
                    </span>
                    <h2 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 mb-6 pt-4 border-t border-slate-700/40">
                    {item.features.map((feat, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Footer */}
                  <div className="relative z-10 flex items-center justify-between text-sm font-bold text-white pt-2">
                    <span className="text-emerald-400 group-hover:underline">Buka Modul</span>
                    <div className="w-9 h-9 rounded-full bg-slate-800/90 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-slate-950 group-hover:border-emerald-400 transition-all duration-300">
                      <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </main>

      {/* Footer info */}
      <footer className="max-w-7xl w-full mx-auto text-center pt-8 pb-4 text-xs text-slate-400 border-t border-slate-800/80">
        <p>Sistem Pembelajaran Biologi SMA Kelas XI • Sistem Pencernaan Manusia</p>
      </footer>
    </div>
  )
}
