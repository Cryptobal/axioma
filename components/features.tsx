"use client"
import { motion } from 'framer-motion'
import { Clock3, Boxes, Cable, Brain } from 'lucide-react'

const features = [
  {
    icon: Clock3,
    title: 'Time-to-Value real',
    desc: 'Entregas quincenales, MVP en 30–90 días.',
  },
  {
    icon: Boxes,
    title: 'Diseño modular',
    desc: 'Crece por módulos, sin deuda técnica innecesaria.',
  },
  {
    icon: Cable,
    title: 'Integraciones abiertas',
    desc: 'APIs, bases de datos, e-commerce, CRM.',
  },
  {
    icon: Brain,
    title: 'IA aplicada',
    desc: 'Menos tareas repetitivas, mejores decisiones.',
  },
]

export function Features() {
  return (
    <section className="container-max mt-16">
      <h2 className="text-xl font-semibold tracking-tight">Soluciones hechas a tu medida</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 flex items-start gap-4"
          >
            <div className="rounded-xl bg-primary/20 text-primary p-2">
              <f.icon className="size-5" />
            </div>
            <div>
              <div className="font-medium">{f.title}</div>
              <p className="text-sm text-zinc-400 mt-1">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


