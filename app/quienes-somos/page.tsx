import { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { Sparkles, Workflow, Boxes, ShieldCheck, Gauge, ListChecks, Lock, Handshake, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Quiénes Somos — LX3',
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
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'LX3', url: 'https://www.lx3.ai' }) }} />
      <PageHeader
        title="Quiénes Somos"
        subtitle="Equipo senior en automatización, IA aplicada y plataformas. Convertimos estrategia en sistemas productivos en 30–90 días."
      />

      {/* Hero editorial con 3 pilares */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{ i: Workflow, t: 'Automatización pragmática', d: 'Rediseñamos flujos críticos y eliminamos tareas repetitivas.' }, { i: Sparkles, t: 'IA aplicada', d: 'Extracción, clasificación y agentes donde generan valor.' }, { i: Boxes, t: 'Sistemas y plataformas', d: 'ERP modular, APIs modernas e integraciones listas para producción.' }].map((x) => (
          <Card key={x.t} className="overflow-hidden">
            <div className="relative h-16 md:h-20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                <x.i className="size-7 md:size-8" />
              </span>
            </div>
            <CardContent>
              <div className="font-medium">{x.t}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{x.d}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* 2. Principios (chips) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { i: Gauge, t: 'Valor de negocio primero' },
            { i: Workflow, t: 'Automatización pragmática' },
            { i: ListChecks, t: 'Datos y trazabilidad' },
            { i: ShieldCheck, t: 'Calidad productiva y seguridad' },
            { i: Handshake, t: 'Transparencia y partnership' },
          ].map((p) => (
            <div key={p.t} className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 text-sm dark:border-zinc-50/10 dark:bg-zinc-50/5 flex items-center gap-3">
              <p.i className="size-5 text-primary" />
              <span>{p.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Experiencia (tres pilares) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Experiencia y liderazgo</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { n: 'Dirección general', d: 'Ex CEOs/COOs con foco en eficiencia operativa y escalado.', i: Users },
            { n: 'Arquitectura de sistemas', d: 'Plataformas, seguridad, observabilidad y gobierno.', i: Boxes },
            { n: 'IA y Datos', d: 'Casos de IA pragmáticos, MLOps y métricas de valor.', i: Sparkles },
          ].map((e) => (
            <Card key={e.n} className="overflow-hidden">
              <div className="relative h-16 md:h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                  <e.i className="size-7 md:size-8" />
                </span>
              </div>
              <CardContent>
                <div className="font-medium">{e.n}</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{e.d}</p>
              </CardContent>
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

      {/* 5. Cómo trabajamos (timeline) */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Cómo trabajamos</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">
          {[
            { s: 'Discovery', d: 'Entendimiento del negocio, objetivos y restricciones.' },
            { s: 'Blueprint 30–90', d: 'Arquitectura, backlog y KPIs.' },
            { s: 'MVP', d: 'Entrega quincenal con demos y feedback.' },
            { s: 'Evolución', d: 'SLAs, roadmap y mejoras continuas.' },
          ].map((t, idx) => (
            <li key={t.s} className="glass rounded-2xl p-4">
              <Badge> Paso {idx + 1}</Badge>
              <div className="mt-2 font-medium">{t.s}</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{t.d}</p>
            </li>
          ))}
        </ol>
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


