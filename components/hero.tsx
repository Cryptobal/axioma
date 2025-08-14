"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900/60 dark:to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,_var(--tw-gradient-stops))] from-primary/25 via-transparent to-transparent" />
      <div className="container-max relative">
        <div className="glass rounded-2xl p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-5xl font-semibold tracking-tight"
              >
                Transformación digital para PyMEs: integración, ERP modular y automatización con IA.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-xl"
              >
                Integramos tus sistemas, automatizamos procesos y construimos ERP modular y apps internas. MVP en 30–90 días.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 flex items-center gap-3"
              >
                <Button asChild size="lg">
                  <Link href="/contacto">Agenda diagnóstico</Link>
                </Button>
                <Button asChild variant="outline" size="lg"><Link href="/servicios">Ver demo</Link></Button>
                <Button asChild variant="outline" size="lg"><Link href="/casos">Casos</Link></Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/Images/Imagen de Adobe Stock (1).jpeg"
                alt="Visual de datos y automatización"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


