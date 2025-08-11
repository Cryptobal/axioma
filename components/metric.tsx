"use client"
import { useEffect, useRef, useState } from 'react'

type Props = { label: string; value: string | number; decimals?: number }

function parseValue(raw: string | number): { sign: string; number: number; suffix: string } {
  if (typeof raw === 'number') return { sign: '', number: Math.abs(raw), suffix: '' }
  const m = String(raw).trim().match(/^([+\-])?(\d+(?:\.\d+)?)(.*)$/)
  if (!m) return { sign: '', number: 0, suffix: '' }
  const [, sign = '', numStr, suffix = ''] = m
  return { sign, number: parseFloat(numStr), suffix }
}

export function Metric({ label, value, decimals = 0 }: Props) {
  const { sign, number, suffix } = parseValue(value)
  const [display, setDisplay] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const durationMs = 1200
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(number * eased)
      if (t < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [number])

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-2xl font-semibold text-primary">
        {`${sign}${display.toFixed(decimals)}${suffix}`}
      </div>
      <div className="text-[12px] text-zinc-400 mt-1">{label}</div>
    </div>
  )
}


