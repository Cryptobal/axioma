import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Logos } from '@/components/logos'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { CardCase } from '@/components/card-case'
import type { Metadata } from 'next'
import { homeMetadata } from '@/lib/seo'

export const metadata: Metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Logos />

      <section className="container-max mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Resultados que hablan</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <CardCase
            title="Implementación ERP en logística"
            description="Unificamos órdenes, picking y trazabilidad reduciendo tiempos de operación."
            metrics={[
              { label: 'Tiempo de ciclo', value: '-35', decimals: 0 },
              { label: 'Flujo caja proyectado', value: '+22', decimals: 0 },
            ]}
          />
          <CardCase
            title="Flujo de caja con IA"
            description="Proyecciones y alertas automáticas para finanzas de retail."
            metrics={[
              { label: 'Exactitud forecast', value: '+3', decimals: 0 },
              { label: 'Horas ahorradas/sem', value: '-18', decimals: 0 },
            ]}
          />
          <CardCase
            title="Payroll automatizado"
            description="Integraciones y validaciones que eliminan errores humanos."
            metrics={[
              { label: 'Errores', value: '-90', decimals: 0 },
              { label: 'Costo', value: '-25', decimals: 0 },
            ]}
          />
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  )
}


