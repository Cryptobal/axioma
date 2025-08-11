import { Metric } from '@/components/metric'

type Props = {
  title: string
  description: string
  metrics: { label: string; value: string }[]
}

export function CardCase({ title, description, metrics }: Props) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="text-base font-medium">{title}</div>
      <p className="text-sm text-zinc-400 mt-2">{description}</p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <Metric key={m.label} label={m.label} value={m.value} />
        ))}
      </div>
    </div>
  )
}


