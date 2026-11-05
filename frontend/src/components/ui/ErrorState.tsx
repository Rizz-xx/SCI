import React from 'react'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ErrorStateProps {
  title?: string
  message: string
  onRetry?: () => void
  retryText?: string
  className?: string
}

export function ErrorState({
  title = 'Terjadi Kendala',
  message,
  onRetry,
  retryText = 'Coba Lagi',
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'glass-card relative overflow-hidden border border-rose-500/30 bg-rose-950/20 p-6 md:p-8 text-center max-w-md mx-auto shadow-xl backdrop-blur-md',
        className
      )}
    >
      {/* Background glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Error icon circle */}
        <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4 shadow-inner">
          <AlertCircle className="w-8 h-8 stroke-[2.2]" />
        </div>

        {/* Title & Message */}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
          {message}
        </p>

        {/* Retry Button */}
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 active:scale-95 transition-all duration-200 shadow-lg shadow-rose-950/50 hover:shadow-rose-600/30"
          >
            <RotateCcw className="w-4 h-4 transition-transform group-hover:rotate-180" />
            <span>{retryText}</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorState
