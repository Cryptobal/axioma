import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Visión de negocio, ejecución técnica. Equipo senior enfocado en valor y métricas.',
}

export default function Page() {
  return (
    <div className="container-max">
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Axima', url: 'https://www.axima.com' }) }} />
      <PageHeader title="Sobre nosotros" subtitle="Automatización pragmática: menos tareas repetitivas, más foco en decisiones de negocio." />
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm text-zinc-300">
          {['Valor sobre features', 'Datos primero', 'Iterar con métricas', 'Transparencia radical', 'Calidad productiva'].map((p) => (
            <li key={p} className="glass rounded-2xl p-4">{p}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Equipo</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3 text-sm">
          {[
            { n: 'Carla Fernández', r: 'Head of Product' },
            { n: 'Diego Torres', r: 'Principal Engineer' },
            { n: 'Lucía Ortiz', r: 'Data Lead' },
          ].map((m) => (
            <div key={m.n} className="glass rounded-2xl p-4"><div className="font-medium">{m.n}</div><div className="text-zinc-400">{m.r}</div></div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Métricas de confianza</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {['+50 proyectos', '20–40% ahorro', 'NPS 75', '99.9% uptime'].map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
      </section>
      <div className="mt-12 rounded-2xl p-6 bg-primary text-white flex items-center justify-between"><div><div className="text-xl font-semibold">Hablemos</div><p className="text-sm opacity-90">Agenda un diagnóstico y recibe un plan de 30–90 días.</p></div><a href="/contacto" className="rounded-2xl bg-white/15 px-4 py-2 text-sm">Agenda diagnóstico</a></div>
    </div>
  )
}


