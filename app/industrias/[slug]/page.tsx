import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Badge } from '@/components/ui/badge'
import Script from 'next/script'

const INDUSTRIES: Record<string, { title: string; problems: string[]; kpis: { label: string; value: string }[] }> = {
  'seguridad-privada': {
    title: 'Seguridad privada',
    problems: ['Coberturas incompletas', 'Horas extra no controladas', 'Turnos y reemplazos manuales', 'Incidentes sin trazabilidad'],
    kpis: [
      { label: 'Reducción de horas extra', value: '-20%' },
      { label: 'Exactitud de asistencia', value: '+15%' },
      { label: 'Tiempo de respuesta', value: '-30%' },
    ],
  },
  logistica: {
    title: 'Logística',
    problems: ['Órdenes y picking dispersos', 'Planificación de rutas manual', 'KPIs poco confiables', 'SLA con baja visibilidad'],
    kpis: [
      { label: 'Tiempo de ciclo', value: '-35%' },
      { label: 'OTIF', value: '+12%' },
      { label: 'Incidencias', value: '-25%' },
    ],
  },
  retail: {
    title: 'Retail',
    problems: ['Forecast débil', 'Reposición tardía', 'Integración e-commerce/ERP limitada', 'Fraude y mermas'],
    kpis: [
      { label: 'Disponibilidad de stock', value: '+8%' },
      { label: 'Exactitud forecast', value: '+5%' },
      { label: 'Mermas', value: '-10%' },
    ],
  },
  construccion: {
    title: 'Construcción',
    problems: ['Control de obra manual', 'Compras sin trazabilidad', 'Desvíos de presupuesto', 'Certificaciones lentas'],
    kpis: [
      { label: 'Desvío presupuestario', value: '-12%' },
      { label: 'Tiempo de certificación', value: '-30%' },
      { label: 'Uso de materiales', value: '+9%' },
    ],
  },
  'servicios-profesionales': {
    title: 'Servicios profesionales',
    problems: ['Asignación de horas manual', 'Facturación errática', 'CRM desconectado', 'Nula visión de rentabilidad por cliente'],
    kpis: [
      { label: 'Utilización', value: '+10%' },
      { label: 'Cobro a tiempo', value: '+15%' },
      { label: 'Retrabajo', value: '-20%' },
    ],
  },
  salud: {
    title: 'Salud',
    problems: ['Agenda y admisión lentas', 'Autorizaciones manuales', 'Glosas y reclamos', 'Cumplimiento regulatorio'],
    kpis: [
      { label: 'Tiempo de atención', value: '-18%' },
      { label: 'Rechazos de pago', value: '-12%' },
      { label: 'Satisfacción paciente', value: '+9%' },
    ],
  },
}

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = INDUSTRIES[params.slug]
  if (!data) return {}
  return {
    title: `${data.title}: software a medida con IA`,
    description: `Solución Axima para ${data.title}: plataforma modular, automatización con IA e integraciones. Entrega en 30–90 días.`,
  }
}

export default function IndustryPage({ params }: Props) {
  const data = INDUSTRIES[params.slug]
  if (!data) return notFound()
  return (
    <div className="container-max">
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Industrias', item: 'https://www.axima.com/industrias' },
            { '@type': 'ListItem', position: 2, name: data.title, item: `https://www.axima.com/industrias/${params.slug}` },
          ],
        }),
      }} />
      <Breadcrumbs />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{data.title}</h1>
      <section className="mt-6">
        <h2 className="text-xl font-semibold tracking-tight">Problemas típicos</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-3">
          {data.problems.map((p) => (
            <li key={p} className="glass rounded-2xl p-4 text-sm text-zinc-300">{p}</li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Solución Axima</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { title: 'Plataforma modular', desc: 'ERP de operaciones con módulos activables según prioridad.' },
            { title: 'Automatización con IA', desc: 'Agentes y extracción semántica para reducir tareas repetitivas.' },
            { title: 'Integraciones', desc: 'APIs modernas, webhooks y conectores listas para producción.' },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-4">
              <div className="font-medium">{b.title}</div>
              <p className="text-sm text-zinc-400 mt-1">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Casos y KPIs esperables</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-3">
          {data.kpis.map((k) => (
            <div key={k.label} className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-semibold text-primary">{k.value}</div><div className="text-xs text-zinc-400 mt-1">{k.label}</div></div>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Arquitectura de referencia</h2>
        <p className="text-sm text-zinc-400 mt-2 max-w-3xl">Front-end en Next.js, servicios en Python/Node, orquestación con colas, almacenamiento en Postgres/Neon, cache opcional en Redis, y workers para tareas asíncronas. Observabilidad, seguridad y auditoría desde el día 1.</p>
        <div className="flex flex-wrap gap-2 mt-3">{['Next.js', 'Python', 'Postgres/Neon', 'Workers', 'Redis (opc.)', 'LLMs'].map((s) => (<Badge key={s} variant="outline">{s}</Badge>))}</div>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Entrega en 30–90 días</h2>
        <p className="text-sm text-zinc-400 mt-2">Priorizamos funcionalidades de alto impacto con entregas quincenales y métricas de negocio.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-3 space-y-3">
          {[
            { q: '¿Cómo iniciamos?', a: 'Realizamos un diagnóstico breve y definimos el blueprint.' },
            { q: '¿Se integra con mi ERP?', a: 'Sí, diseñamos conectores y APIs a medida.' },
            { q: '¿Qué riesgos existen?', a: 'Controlamos alcance, iteramos y medimos valor continuamente.' },
            { q: '¿Cómo medimos éxito?', a: 'KPIs por proceso y reportes automáticos.' },
          ].map((f) => (
            <details key={f.q} className="glass rounded-2xl p-4"><summary className="cursor-pointer font-medium">{f.q}</summary><p className="text-sm text-zinc-400 mt-2">{f.a}</p></details>
          ))}
        </div>
      </section>
      <div className="mt-12 rounded-2xl p-6 bg-primary text-white flex items-center justify-between"><div><div className="text-xl font-semibold">Conversemos {data.title}</div><p className="text-sm opacity-90">Agenda un diagnóstico y recibe un plan de 30–90 días.</p></div><a href="/contacto" className="rounded-2xl bg-white/15 px-4 py-2 text-sm">Agenda diagnóstico</a></div>
    </div>
  )
}


