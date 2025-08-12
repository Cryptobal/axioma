import { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { Section } from '@/components/section'
import Script from 'next/script'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Brain, Boxes, Cable, ClipboardList, Wrench, Workflow, Bot, Link2, MessageSquare, FileSpreadsheet, ShieldCheck } from 'lucide-react'
import { SectionNav } from '@/components/section-nav'

export const metadata: Metadata = {
  title: 'Servicios de automatización y software a medida con IA',
  description:
    'Consultoría, desarrollo ERP modular, automatización con IA, integraciones y soporte continuo. MVP en 30–90 días.',
}

const painPoints = [
  { title: 'Costos operativos', desc: 'Procesos manuales y retrabajo elevan el costo por transacción.' },
  { title: 'Errores manuales', desc: 'Capturas duplicadas y falta de validaciones robustas.' },
  { title: 'Reporting lento', desc: 'Dependencia de planillas y cierres que tardan semanas.' },
  { title: 'Silos de información', desc: 'Sistemas sin integración dificultan la trazabilidad.' },
  { title: 'Trazabilidad limitada', desc: 'Poca visibilidad del ciclo completo y auditorías complejas.' },
  { title: 'Escalado complejo', desc: 'Crecer implica contratar más personas, no mejorar procesos.' },
]

const services = [
  { icon: ClipboardList, title: 'Consultoría y Auditoría de Procesos', cta: 'Solicitar diagnóstico', href: '/contacto', desc: 'Mapeamos flujos críticos, identificamos cuellos de botella y priorizamos acciones.' },
  { icon: Boxes, title: 'Desarrollo de Software de Gestión', cta: 'Explorar ERP modular', href: '/servicios', desc: 'ERP modular web+mobile orientado a operaciones, finanzas y RRHH.' },
  { icon: Brain, title: 'Automatización con IA', cta: 'Casos de IA', href: '/casos', desc: 'Agentes, RAG, extracción documental y clasificación semántica.' },
  { icon: Cable, title: 'Integraciones y APIs', cta: 'Ver integraciones', href: '/servicios', desc: 'APIs modernas, webhooks, conectores con ERPs y e-commerce.' },
  { icon: Wrench, title: 'Soporte y Evolución', cta: 'Hablar con soporte', href: '/contacto', desc: 'SLAs claros, roadmaps trimestrales, observabilidad y seguridad.' },
]

const timeline = [
  { step: 'Descubrimiento', desc: 'Entendimiento del negocio, objetivos y restricciones.' },
  { step: 'Blueprint', desc: 'Arquitectura, backlog priorizado y plan de MVP.' },
  { step: 'MVP (30–90 días)', desc: 'Entrega funcional con foco en valor y métricas.' },
  { step: 'Iteración quincenal', desc: 'Mejoras continuas y nuevas capacidades.' },
  { step: 'Escalado', desc: 'Optimización, automatización y gobernanza.' },
]

export default function Page() {
  return (
    <div className="container-max">
      <Script id="ld-services" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Servicios de automatización y software a medida con IA',
          provider: { '@type': 'Organization', name: 'LX3' },
          areaServed: 'LatAm',
          url: 'https://www.lx3.ai/servicios',
        }),
      }} />
      <PageHeader title="Servicios de automatización y software a medida con IA" subtitle="Somos un equipo senior en producto, datos y automatización. Construimos software que reduce costos, acelera reporting y habilita escalado. Trabajamos con organizaciones de alto desempeño en múltiples industrias." />
      <p className="text-zinc-400 mt-2 max-w-3xl">Clientes refieren mejoras de 20–40% en KPIs operativos durante los primeros 90 días. Solicita un diagnóstico sin costo.</p>

      <div className="grid md:grid-cols-[240px,1fr] gap-8 mt-6">
        <SectionNav items={[
          { id: 'que-resolvemos', label: 'Qué resolvemos' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'integraciones', label: 'Integraciones y herramientas' },
          { id: 'como-trabajamos', label: 'Cómo trabajamos' },
          { id: 'precios', label: 'Precios' },
          { id: 'faq', label: 'FAQ' },
        ]} />
        <div>
      <Section id="que-resolvemos" className="mt-4" variant="surface">
        <h2 className="text-xl font-semibold tracking-tight">Qué resolvemos</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {painPoints.map((p) => (
            <Card key={p.title}>
              <CardContent>
                <div className="font-medium">{p.title}</div>
                <p className="text-sm text-zinc-400 mt-1">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="servicios" className="mt-10" variant="mesh">
        <h2 className="text-xl font-semibold tracking-tight">Nuestros servicios</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Consultoría, desarrollo e integración end‑to‑end. Entregamos un MVP en 30–90 días y evolucionamos con SLAs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden">
              <div className="relative h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                  <s.icon className="size-7 md:size-9" />
                </span>
              </div>
              <CardContent>
                <div className="font-medium">{s.title}</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{s.desc}</p>
                <Button asChild variant="outline" className="mt-3"><Link href={s.href as any}>{s.cta}</Link></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <section id="integraciones" className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Integraciones y herramientas</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">Usamos herramientas cotidianas para acelerar adopción y reducir riesgos; cuando hace falta, pasamos a APIs robustas.</p>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[{ i: FileSpreadsheet, t: 'Excel/Sheets' }, { i: MessageSquare, t: 'Slack' }, { i: Link2, t: 'HubSpot / ZohoCRM' }, { i: Link2, t: 'ERP / e‑commerce' }, { i: Bot, t: 'ChatGPT (asistentes)' }, { i: Link2, t: 'Make.com / Zapier' }, { i: ShieldCheck, t: 'Auditoría y logs' }].map((x) => (
            <div key={x.t} className="flex items-center gap-2 rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-3 dark:border-zinc-50/10 dark:bg-zinc-50/5">
              <x.i className="size-5 text-primary" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="como-trabajamos" className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Cómo trabajamos</h2>
        <ol className="grid md:grid-cols-5 gap-4 mt-4">
          {timeline.map((t, i) => (
            <li key={t.step} className="glass rounded-2xl p-4">
              <Badge>Paso {i + 1}</Badge>
              <div className="mt-2 font-medium">{t.step}</div>
              <p className="text-sm text-zinc-400">{t.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      

      <section id="precios" className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Modelos de precio</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            { title: 'Discovery fee', desc: 'Diagnóstico inicial y blueprint ejecutable.' },
            { title: 'MVP tarifa fija', desc: 'Alcance y plan cerrado para 30–90 días.' },
            { title: 'Retainer mensual', desc: 'Evolución, soporte y roadmap continuo.' },
          ].map((p) => (
            <Card key={p.title}><CardContent><div className="font-medium">{p.title}</div><p className="text-sm text-zinc-400 mt-1">{p.desc}</p></CardContent></Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-4 space-y-3">
          {[
            { q: '¿Qué plazos manejan?', a: 'Diseñamos MVPs de 30–90 días con entregas quincenales.' },
            { q: '¿Trabajan con sistemas legados?', a: 'Sí. Integramos mediante APIs, colas o ETLs controladas.' },
            { q: '¿Cómo garantizan calidad?', a: 'Pruebas automatizadas, monitoreo y acuerdos de nivel de servicio.' },
            { q: '¿Puedo comenzar pequeño?', a: 'Sí, priorizamos alto impacto y bajo riesgo.' },
            { q: '¿Qué costos debo esperar?', a: 'Tarifa fija para MVP y retainer para evolución.' },
            { q: '¿Soportan múltiples países?', a: 'Sí, multimoneda, multiempresa y compliance local.' },
          ].map((f) => (
            <details key={f.q} className="glass rounded-2xl p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="text-sm text-zinc-400 mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-12 flex items-center justify-between gap-4">
        <div>
          <div className="text-xl font-semibold">¿Listo para comenzar?</div>
          <p className="text-sm text-zinc-400">Revisa casos reales y agenda un diagnóstico.</p>
        </div>
        <div className="flex gap-2">
          <Button asChild><Link href="/contacto">Agenda diagnóstico</Link></Button>
          <Button asChild variant="outline"><Link href="/casos">Ver casos</Link></Button>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}


