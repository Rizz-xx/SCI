'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  href?: string
  label?: string
  className?: string
  onClick?: () => void
}

export function BackButton({
  href,
  label = 'Kembali',
  className,
  onClick,
}: BackButtonProps) {
  const router = useRouter()

  const buttonContent = (
    <>
      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </>
  )

  const commonClasses = cn(
    'btn-secondary group inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-all',
    className
  )

  if (href) {
    return (
      <Link href={href} className={commonClasses} onClick={onClick}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick()
        } else {
          router.back()
        }
      }}
      className={commonClasses}
    >
      {buttonContent}
    </button>
  )
}

export default BackButton
