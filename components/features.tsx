"use client"
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Entrega rápida',
    desc: 'Iteramos en semanas con sprints claros y entregables medibles.',
  },
  {
    title: 'IA aplicada',
    desc: 'Incorporamos LLMs y automatizaciones para maximizar eficiencia.',
  },
  {
    title: 'A la medida',
    desc: 'Diseño modular alineado a tus procesos y métricas de negocio.',
  },
  {
    title: 'Escalable y seguro',
    desc: 'Arquitectura moderna, pruebas y monitoreo desde el día uno.',
  },
  {
    title: 'Soporte continuo',
    desc: 'Acompañamiento post‑lanzamiento y roadmap evolutivo.',
  },
]

export function Features() {
  return (
    <section className="container-max mt-12">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass rounded-2xl p-6"
          >
            <div className="text-base font-medium">{f.title}</div>
            <p className="text-sm text-zinc-400 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


