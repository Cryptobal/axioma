import { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quiénes Somos — Axima',
  description: 'Directores y profesionales con 30+ años de experiencia en automatización, IA y sistemas. Ejecutamos con estándares de clase mundial.',
}

const principles = [
  'Valor de negocio primero',
  'Automatización pragmática',
  'Datos y trazabilidad como estándar',
  'Calidad productiva y seguridad',
  'Transparencia y partnership',
]

const pillars = [
  { title: 'Automatización de procesos', desc: 'Rediseñamos flujos críticos para reducir tiempos y costos.' },
  { title: 'IA aplicada', desc: 'Agentes, RAG y extracción documental para decisiones mejores y más rápidas.' },
  { title: 'Sistemas y plataformas', desc: 'ERP modular, APIs modernas e integraciones robustas listas para producción.' },
]

const trackRecord = [
  { k: '+30', v: 'años de experiencia acumulada por líder' },
  { k: '+50', v: 'implementaciones empresariales' },
  { k: '20–40%', v: 'ahorro operativo típico' },
  { k: 'NPS 75', v: 'satisfacción de clientes' },
]

export default function Page() {
  return (
    <div className="container-max">
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Axima', url: 'https://www.axima.com' }) }} />
      <PageHeader
        title="Quiénes Somos"
        subtitle="Directores y profesionales con más de 30 años en automatización, IA y sistemas. Convertimos estrategia en software productivo, medible y seguro."
      />

      {/* 1. Quiénes somos (mobile first) */}
      <section className="mt-8 grid gap-4 md:grid-cols-12">
        <Card className="md:col-span-7 overflow-hidden">
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>
          <CardContent>
            <div className="text-lg font-medium">Nuestra misión</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Aceleramos el impacto de negocio con sistemas a medida y <strong>IA aplicada</strong>. Rediseñamos procesos críticos y entregamos software listo para producción en 30–90 días.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['Automatización pragmática', 'Datos y trazabilidad', 'Seguridad y gobierno'].map((s) => (
                <span key={s} className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200">{s}</span>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-5 overflow-hidden">
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>
          <CardContent>
            <div className="text-lg font-medium">Cómo trabajamos</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Iteramos quincenalmente con entregas a producción y KPIs claros; priorizamos alto impacto y aprendemos del uso real.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Discovery', 'Blueprint 30–90', 'MVP', 'Evolución'].map((s) => (
                <Badge key={s} variant="outline">{s}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. Principios (chips) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p} className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 text-sm dark:border-zinc-50/10 dark:bg-zinc-50/5">
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Experiencia (tres pilares) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Experiencia y liderazgo</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { n: 'Dirección general', d: 'Ex CEOs/COOs con foco en eficiencia operativa y escalado.' },
            { n: 'Arquitectura de sistemas', d: 'Diseño de plataformas, seguridad, observabilidad y gobierno.' },
            { n: 'IA y Datos', d: 'Casos de IA pragmáticos, MLOps y métricas de valor.' },
          ].map((e) => (
            <Card key={e.n}>
              <CardHeader><div className="font-medium">{e.n}</div></CardHeader>
              <CardContent><p className="text-sm text-zinc-600 dark:text-zinc-300">{e.d}</p></CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Trayectoria (badges) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Trayectoria y resultados</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {trackRecord.map((t) => (
            <Badge key={t.k} variant="outline">{t.k} {t.v}</Badge>
          ))}
        </div>
      </section>

      {/* 5. CTA final */}
      <div className="mt-12 rounded-2xl bg-primary text-white">
        <div className="p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xl font-semibold">Conversemos</div>
            <p className="text-sm opacity-90">Agenda un diagnóstico y recibe un blueprint ejecutable de 30–90 días.</p>
          </div>
          <Link href="/contacto" className="rounded-2xl bg-white/15 px-4 py-2 text-sm">Agenda diagnóstico</Link>
        </div>
      </div>
    </div>
  )
}


