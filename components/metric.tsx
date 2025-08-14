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
  const nf = useMemo(() => new Intl.NumberFormat('es-CL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }), [decimals])
  const formatted = useMemo(() => `${sign}${nf.format(number)}${suffix}` as string, [sign, number, suffix, nf])

  return (
    <div className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 p-3 text-center dark:border-zinc-50/20 dark:bg-zinc-900">
      <div className="text-2xl font-semibold text-primary">{formatted}</div>
      <div className="text-[12px] text-zinc-600 dark:text-zinc-300 mt-1 truncate">{label}</div>
    </div>
  )
}


