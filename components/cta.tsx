"use client"
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="container-max mt-16">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl p-6 md:p-8 bg-primary text-white"
      >
        <div className="md:flex items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Conversemos sobre tus cuellos de botella</h3>
            <p className="mt-1 text-sm opacity-90">¿PyME? Comencemos un MVP en 30–60 días.</p>
          </div>
          <div className="flex gap-2">
            <Button className="mt-4 md:mt-0" variant="default" size="lg">Agenda diagnóstico</Button>
            <Button className="mt-4 md:mt-0" variant="secondary" size="lg" asChild>
              <a href="/contacto?segment=pymes">Soy PyME</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}


