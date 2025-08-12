"use client"
import { useEffect, useMemo, useRef, useState } from 'react'

type Props = {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function CounterStat({ label, value, prefix = '', suffix = '', decimals = 0 }: Props) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 1200
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 3)
            setDisplay(value * eased)
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { rootMargin: '0px 0px -20% 0px' }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [value])

  const formatted = useMemo(() => `${prefix}${display.toFixed(decimals)}${suffix}`, [display, prefix, suffix, decimals])

  return (
    <div ref={ref} className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 text-center dark:border-zinc-50/10 dark:bg-zinc-50/5">
      <div className="text-2xl font-semibold text-primary">{formatted}</div>
      <div className="text-[12px] text-zinc-600 dark:text-zinc-400 mt-1">{label}</div>
    </div>
  )
}


