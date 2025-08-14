import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Automatización con IA | LX3',
  description: 'Bots, flujos y asistentes que reducen costos y errores. INP bajo, control alto.',
  alternates: { canonical: '/servicios/automatizacion-ia' },
  openGraph: { type: 'website', url: `${SITE_URL}/servicios/automatizacion-ia` },
}

export default function Page() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatización con IA',
    provider: { '@type': 'Organization', name: 'LX3' },
    areaServed: 'LatAm',
    url: `${SITE_URL}/servicios/automatizacion-ia`,
  }
  return (
    <div className="container-max">
      <Script id="ld-service-ia" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHeader title="Automatización con IA" subtitle="Automatizaciones y asistentes con IA aplicada para reducir costos y errores." />
      <div className="prose prose-invert mt-4">
        <h2>Casos de reducción de costos</h2>
        <p>Agentes, RAG, extracción documental y clasificación semántica.</p>
        <h2>Flujos típicos</h2>
        <p>Backoffice, aprobaciones, conciliaciones y control operativo.</p>
        <h2>Stack</h2>
        <p>Next.js, Python, LLMs, colas y observabilidad.</p>
      </div>
    </div>
  )
}


