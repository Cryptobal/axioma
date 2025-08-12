"use client"
import { useMemo } from 'react'

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
  const formatted = useMemo(() => `${sign}${number.toFixed(decimals)}${suffix}` as string, [sign, number, decimals, suffix])

  return (
    <div className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 p-3 text-center dark:border-zinc-50/10 dark:bg-zinc-50/5">
      <div className="text-2xl font-semibold text-primary">{formatted}</div>
      <div className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-1 truncate">{label}</div>
    </div>
  )
}


