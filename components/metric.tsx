type Props = { label: string; value: string }

export function Metric({ label, value }: Props) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-lg font-semibold text-primary">{value}</div>
      <div className="text-[12px] text-zinc-400 mt-1">{label}</div>
    </div>
  )
}


