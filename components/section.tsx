import { cn } from '@/lib/utils'
import React from 'react'

type Variant = 'default' | 'surface' | 'dots' | 'mesh'

export function Section({ children, variant = 'default', className }: { children: React.ReactNode; variant?: Variant; className?: string }) {
  return (
    <section
      className={cn(
        'relative',
        variant === 'surface' && 'bg-zinc-900/[0.02] dark:bg-zinc-50/[0.03]',
        variant === 'dots' && 'bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.06)_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.06)_1px,_transparent_0)] bg-[length:16px_16px] ',
        variant === 'mesh' && 'after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(60%_40%_at_50%_0%,_var(--tw-gradient-stops))] after:from-primary/10 after:via-transparent after:to-transparent',
        className
      )}
    >
      {children}
    </section>
  )
}


