import { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

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
        subtitle="Somos directores y profesionales con 30+ años de experiencia en automatización, inteligencia artificial y sistemas. Convertimos estrategia en software productivo, medible y seguro."
      />

      <section className="mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <Card key={p.title}><CardContent><div className="font-medium">{p.title}</div><p className="text-sm text-zinc-400 mt-1">{p.desc}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Principios</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-3">
          {principles.map((p) => (
            <div key={p} className="glass rounded-2xl p-4 text-sm">{p}</div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Experiencia y liderazgo</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          {[
            { n: 'Dirección general', d: 'Ex CEOs/COOs con foco en eficiencia operativa y escalado.' },
            { n: 'Arquitectura de sistemas', d: 'Diseño de plataformas, seguridad, observabilidad y gobierno.' },
            { n: 'IA y Datos', d: 'Casos de IA pragmáticos, MLOps y métricas de valor.' },
          ].map((e) => (
            <Card key={e.n}><CardHeader><div className="font-medium">{e.n}</div></CardHeader><CardContent><p className="text-sm text-zinc-400">{e.d}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Trayectoria y resultados</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {trackRecord.map((t) => (
            <Badge key={t.k} variant="outline">{t.k} {t.v}</Badge>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Cómo nos involucramos</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-3">
          {[{ t: 'Discovery y Blueprint', d: 'Diagnóstico ejecutivo y plan de 30–90 días con KPIs.' }, { t: 'Ejecución del MVP', d: 'Iteraciones quincenales con entregas a producción.' }, { t: 'Evolución continua', d: 'Roadmap trimestral, SLAs y gobernanza.' }].map((x) => (
            <Card key={x.t}><CardContent><div className="font-medium">{x.t}</div><p className="text-sm text-zinc-400 mt-1">{x.d}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl p-6 bg-primary text-white flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">Conversemos</div>
          <p className="text-sm opacity-90">Agenda un diagnóstico y recibe un blueprint ejecutable de 30–90 días.</p>
        </div>
        <a href="/contacto" className="rounded-2xl bg-white/15 px-4 py-2 text-sm">Agenda diagnóstico</a>
      </div>
    </div>
  )
}


