import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  text?: string
  className?: string
}

export function LoadingSpinner({
  size = 'md',
  text,
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  }

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3 p-4', className)}>
      <div className="relative flex items-center justify-center">
        {/* Glow halo */}
        <div
          className={cn(
            'absolute rounded-full bg-emerald-500/20 blur-md',
            size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : 'w-20 h-20'
          )}
        />
        {/* Spinner ring */}
        <div
          className={cn(
            'rounded-full border-slate-700/60 border-t-emerald-400 border-r-teal-400 animate-spin',
            sizeClasses[size]
          )}
          style={{ animationDuration: '0.8s' }}
        />
      </div>
      {text && (
        <p className="text-sm font-medium text-slate-300 animate-pulse tracking-wide text-center">
          {text}
        </p>
      )}
    </div>
  )
}

export default LoadingSpinner
