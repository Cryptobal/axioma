"use client"
import Link from 'next/link'
import { Metric } from '@/components/metric'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Boxes, ShoppingCart, Shield, Banknote, Cog, LineChart, type LucideIcon } from 'lucide-react'

export type Props = {
  title: string
  description: string
  metrics: { label: string; value: string | number; decimals?: number }[]
  href?: string
  stack?: string[]
  iconKey?: 'boxes' | 'shopping-cart' | 'shield' | 'banknote' | 'cog' | 'line-chart'
}

const ICONS: Record<NonNullable<Props['iconKey']>, LucideIcon> = {
  'boxes': Boxes,
  'shopping-cart': ShoppingCart,
  'shield': Shield,
  'banknote': Banknote,
  'cog': Cog,
  'line-chart': LineChart,
}

export function CardCase({ title, description, metrics, href = '/casos', stack, iconKey }: Props) {
  const Icon = iconKey ? ICONS[iconKey] : undefined
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl overflow-hidden">
      <div className="relative h-24 md:h-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        {Icon ? (
          <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
            <Icon className="size-8 md:size-10" />
          </span>
        ) : null}
      </div>
      <div className="p-5 md:p-6">
        <div className="text-base font-medium">{title}</div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
          {metrics.map((m) => (
            <div key={m.label} className="min-w-0">
              <Metric label={m.label} value={m.value} decimals={m.decimals} />
            </div>
          ))}
        </div>
        {stack && stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 md:gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 px-2 py-0.5 text-[11px] text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200">{s}</span>
            ))}
          </div>
        )}
        <Button asChild variant="outline" className="mt-5">
          <Link href={href as any}>Leer caso</Link>
        </Button>
      </div>
    </motion.div>
  )
}


