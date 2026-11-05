import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatScore(score: number, total: number): string {
  const pct = Math.round((score / total) * 100)
  return `${pct}%`
}

export function getScoreLabel(score: number, total: number): { label: string; color: string } {
  const pct = Math.round((score / total) * 100)
  if (pct >= 85) return { label: 'Sangat Baik', color: 'text-emerald-400' }
  if (pct >= 70) return { label: 'Baik', color: 'text-green-400' }
  if (pct >= 55) return { label: 'Cukup', color: 'text-yellow-400' }
  return { label: 'Perlu Latihan', color: 'text-red-400' }
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
