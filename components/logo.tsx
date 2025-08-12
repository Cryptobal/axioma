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
      {/* 3 */}
      <path d="M112 14 C 128 8, 144 8, 156 14" />
      <path d="M156 14 C 160 20, 160 26, 156 32" />
      <path d="M112 32 C 128 26, 144 26, 156 32" />
    </svg>
  )
}


