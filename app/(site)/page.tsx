import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { CardCase } from '@/components/card-case'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-max mt-12">
        <div className="text-sm text-zinc-400 text-center">Logos de clientes</div>
        <div className="glass rounded-2xl p-8 mt-4 grid grid-cols-2 md:grid-cols-6 gap-6 text-zinc-500">
          <div className="h-10 bg-white/5 rounded-xl" />
          <div className="h-10 bg-white/5 rounded-xl" />
          <div className="h-10 bg-white/5 rounded-xl" />
          <div className="h-10 bg-white/5 rounded-xl" />
          <div className="h-10 bg-white/5 rounded-xl" />
          <div className="h-10 bg-white/5 rounded-xl" />
        </div>
      </section>

      <Features />

      <section className="container-max mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Casos destacados</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <CardCase
            title="ERP a medida en logística"
            description="Unificamos órdenes, picking y trazabilidad reduciendo tiempos de operación."
            metrics={[
              { label: 'Reducción de tiempos', value: '−35%' },
              { label: 'Precisión de datos', value: '+99%' },
              { label: 'ROI', value: '4.2x' },
            ]}
          />
          <CardCase
            title="Flujo de caja con IA"
            description="Proyecciones y alertas automáticas para finanzas de retail."
            metrics={[
              { label: 'Exactitud forecast', value: '±3%' },
              { label: 'Alertas críticas', value: '24/7' },
              { label: 'Tiempo ahorro', value: '−18h/sem' },
            ]}
          />
          <CardCase
            title="Payroll automatizado"
            description="Integraciones y validaciones que eliminan errores humanos."
            metrics={[
              { label: 'Errores', value: '−90%' },
              { label: 'Costo', value: '−25%' },
              { label: 'Satisfacción', value: '+30 NPS' },
            ]}
          />
        </div>
      </section>

      <section className="container-max mt-12">
        <div className="text-sm text-zinc-400 text-center">Testimonios</div>
        <div className="glass rounded-2xl p-12 mt-4 text-center text-zinc-400">
          Próximamente
        </div>
      </section>

      <CTA />
    </>
  )
}


