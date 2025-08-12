import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'outline'

export function Badge({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  const base = 'inline-flex items-center rounded-xl px-2.5 py-0.5 text-[11px] font-medium'
  const styles: Record<Variant, string> = {
    default: 'bg-primary/15 text-primary border border-primary/20',
    outline: 'border border-zinc-900/15 text-zinc-700 dark:border-zinc-50/15 dark:text-zinc-200',
  }
  return <span className={cn(base, styles[variant], className)} {...props} />
}


