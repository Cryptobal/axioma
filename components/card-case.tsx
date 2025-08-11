"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Metric } from '@/components/metric'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  metrics: { label: string; value: string | number; decimals?: number }[]
}

export function CardCase({ title, description, metrics }: Props) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl overflow-hidden">
      <div className="relative aspect-[16/9] bg-white/5">
        <Image
          src="/placeholder.svg"
          alt={title}
          fill
          className="object-cover opacity-70"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6">
        <div className="text-base font-medium">{title}</div>
        <p className="text-sm text-zinc-400 mt-2">{description}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <Metric key={m.label} label={m.label} value={m.value} decimals={m.decimals} />
          ))}
        </div>
        <Button asChild variant="outline" className="mt-5">
          <Link href="/casos">Ver caso completo</Link>
        </Button>
      </div>
    </motion.div>
  )
}


