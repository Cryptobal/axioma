"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="container-max mt-16">
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="md:flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">¿Listo para empezar?</h3>
            <p className="text-zinc-400 mt-1 text-sm">Agenda un diagnóstico gratuito y obtén un plan de acción.</p>
          </div>
          <Button className="mt-4 md:mt-0">Agenda diagnóstico</Button>
        </div>
      </div>
    </section>
  )
}


