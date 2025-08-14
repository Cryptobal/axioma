import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Aplicaciones internas | LX3',
  description: 'Aplicaciones internas para estandarizar procesos, trazabilidad y reporting.',
  alternates: { canonical: '/servicios/aplicaciones-internas' },
  openGraph: { type: 'website', url: `${SITE_URL}/servicios/aplicaciones-internas` },
}

export default function Page() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Aplicaciones internas',
    provider: { '@type': 'Organization', name: 'LX3' },
    areaServed: 'LatAm',
    url: `${SITE_URL}/servicios/aplicaciones-internas`,
  }
  return (
    <div className="container-max">
      <Script id="ld-service-internas" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHeader title="Aplicaciones internas" subtitle="Apps internas que profesionalizan la gestión: trazabilidad, reporting y estandarización." />
      <div className="prose prose-invert mt-4">
        <h2>Procesos</h2>
        <p>Backoffice, aprobaciones, inventario y reporting de KPIs.</p>
        <h2>KPIs</h2>
        <p>Métricas accionables con foco en eficiencia y control operativo.</p>
      </div>
    </div>
  )
}


