"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container-max">
      <div className="glass rounded-2xl px-8 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight"
        >
          Automatizamos tu operación con software a medida impulsado por IA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-zinc-300 max-w-3xl mx-auto"
        >
          Construimos herramientas que se adaptan a tu negocio: ERP a medida, flujos de caja, control operativo,
          payroll y automatizaciones inteligentes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <Button asChild size="lg">
            <Link href="/contacto">Agenda diagnóstico</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/casos">Ver casos</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}


