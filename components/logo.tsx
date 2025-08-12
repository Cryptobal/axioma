"use client"
import { cn } from '@/lib/utils'

type Props = { className?: string }

// Logo LX3 minimal: L + X + 3 trazado con currentColor
export function Logo({ className }: Props) {
  return (
    <svg
      viewBox="0 0 180 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-auto', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      role="img"
    >
      {/* L */}
      <path d="M8 8 L8 40 L40 40" />
      {/* X */}
      <path d="M60 10 L92 38" />
      <path d="M92 10 L60 38" />
      {/* 3 (dos arcos + unión vertical sutil) */}
      <path d="M112 16 Q 134 6 156 16" />
      <path d="M112 32 Q 134 42 156 32" />
      <path d="M152 16 L 152 32" />
    </svg>
  )
}


