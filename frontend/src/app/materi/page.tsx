'use client'

import React from 'react'
import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import {
  Layers,
  Activity,
  Sparkles,
  Network,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react'
import { BackButton } from '@/components/ui/BackButton'

interface MateriCategory {
  slug: string
  title: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  readTime: string
  subtopics: string[]
  badgeClass: string
  borderColor: string
  hoverBorder: string
  glowGradient: string
  iconBg: string
  iconColor: string
}

const materiList: MateriCategory[] = [
  {
    slug: 'organ',
    title: 'Organ Sistem Pencernaan',
    category: 'Anatomi Saluran & Kelenjar',
    icon: Layers,
    description:
      'Mempelajari susunan saluran cerna mulai dari rongga mulut, faring, esofagus, lambung, usus halus, usus besar, hingga kelenjar pencernaan (hati, empedu, pankreas).',
    readTime: '12 menit',
    subtopics: [
      'Rongga Mulut & Gigi',
      'Esofagus & Sfingter',
      'Lambung & Kelenjar Gastrik',
      'Usus Halus & Usus Besar',
      'Hati, Empedu & Pankreas',
    ],
    badgeClass: 'badge-green',
    borderColor: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400/60',
    glowGradient: 'from-emerald-500/15 via-emerald-600/5 to-transparent',
    iconBg: 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400',
    iconColor: 'text-emerald-400',
  },
  {
    slug: 'proses',
    title: 'Proses Pencernaan',
    category: 'Fisiologi Mekanik & Kimiawi',
    icon: Activity,
    description:
      'Memahami mekanisme mastikasi di mulut, gerakan peristaltik pendorong bolus di esofagus, gerakan meremas di lambung, serta digesti enzimatik hingga terbentuk kimus.',
    readTime: '10 menit',
    subtopics: [
      'Pencernaan Mekanis vs Kimiawi',
      'Mastikasi & Deglutisi (Menelan)',
      'Gerak Peristaltik & Segmentasi',
      'Pengosongan Lambung (Kimus)',
      'Pengeluaran Defekasi',
    ],
    badgeClass: 'badge-blue',
    borderColor: 'border-sky-500/30',
    hoverBorder: 'hover:border-sky-400/60',
    glowGradient: 'from-sky-500/15 via-sky-600/5 to-transparent',
    iconBg: 'bg-sky-500/15 border border-sky-500/30 text-sky-400',
    iconColor: 'text-sky-400',
  },
  {
    slug: 'enzim',
    title: 'Enzim Pencernaan',
    category: 'Biokimiawi & Katalis Tubuh',
    icon: Sparkles,
    description:
      'Eksplorasi macam-macam biokatalisator pencernaan: ptialin saliva, pepsin & renin lambung, amilase, tripsin, lipase pankreas, serta pengaruh pH asam maupun basa.',
    readTime: '14 menit',
    subtopics: [
      'Enzim Saliva (Ptialin/Amilase)',
      'Enzim Lambung (Pepsin & Asam HCl)',
      'Enzim Pankreas (Tripsin, Lipase, Amilase)',
      'Enzim Usus Halus (Maltase, Sukrase, Laktase)',
      'Faktor pH & Suhu terhadap Enzim',
    ],
    badgeClass: 'badge-teal',
    borderColor: 'border-teal-500/30',
    hoverBorder: 'hover:border-teal-400/60',
    glowGradient: 'from-teal-500/15 via-teal-600/5 to-transparent',
    iconBg: 'bg-teal-500/15 border border-teal-500/30 text-teal-300',
    iconColor: 'text-teal-300',
  },
  {
    slug: 'penyerapan',
    title: 'Penyerapan Zat Makanan',
    category: 'Absorpsi Nutrisi di Vili Usus',
    icon: Network,
    description:
      'Mengulas struktur mikroskopis vili dan mikrovili pada ileum serta mekanisme transpor zat makanan (glukosa, asam amino, asam lemak, vitamin, air) ke kapiler dan limfa.',
    readTime: '9 menit',
    subtopics: [
      'Struktur Anatomi Vili & Mikrovili',
      'Absorpsi Karbohidrat (Monosakarida)',
      'Absorpsi Asam Amino & Peptida',
      'Absorpsi Lipid melalui Pembuluh Kil/Limfa',
      'Penyerapan Air & Elektrolit di Kolon',
    ],
    badgeClass: 'badge-green',
    borderColor: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-400/60',
    glowGradient: 'from-emerald-500/15 via-teal-600/5 to-transparent',
    iconBg: 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400',
    iconColor: 'text-emerald-400',
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function MateriPage() {
  return (
    <div className="page-container bg-mesh min-h-screen text-slate-100 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8">
      {/* Ambient background light */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl -z-10" />

      {/* Header bar with BackButton to /menu */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between pb-6 mb-4 border-b border-slate-800/80">
        <BackButton href="/menu" label="Menu Utama" />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-300 hidden sm:inline-block">
            Silabus Pembelajaran
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl w-full mx-auto flex-1 my-6">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Kurikulum Biologi Kelas XI SMA</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Daftar <span className="gradient-text">Materi Pembelajaran</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Pelajari setiap sub-topik sistem pencernaan manusia secara sistematis untuk membangun pemahaman konsep biologis yang utuh.
          </p>
        </div>

        {/* 4 Cards in Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {materiList.map((materi, index) => {
            const Icon = materi.icon
            return (
              <motion.div key={materi.slug} variants={itemVariants}>
                <Link
                  href={`/materi/${materi.slug}`}
                  className={`group relative block h-full glass-card p-6 sm:p-8 rounded-3xl border ${materi.borderColor} ${materi.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 shadow-xl overflow-hidden`}
                >
                  {/* Glowing backlight */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${materi.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${materi.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-7 h-7 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                          Modul {index + 1} • {materi.category}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {materi.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60 shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{materi.readTime}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="relative z-10 text-slate-300 text-sm leading-relaxed mb-6">
                    {materi.description}
                  </p>

                  {/* Subtopics Checklist */}
                  <div className="relative z-10 bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 mb-6">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                      Fokus Pembahasan:
                    </span>
                    <ul className="space-y-1.5">
                      {materi.subtopics.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer button CTA */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-700/50">
                    <span className="text-xs font-medium text-slate-400">
                      Status: <span className="text-emerald-400 font-semibold">Tersedia</span>
                    </span>

                    <div className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
                      <span>Buka Materi</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl w-full mx-auto text-center pt-8 pb-4 text-xs text-slate-400 border-t border-slate-800/80">
        <p>Sistem Pembelajaran Biologi SMA Kelas XI • Sistem Pencernaan Manusia</p>
      </footer>
    </div>
  )
}
