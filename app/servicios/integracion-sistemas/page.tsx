import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Integración de sistemas | LX3',
  description: 'Orquestación de datos y APIs: ERP, e‑commerce, CRM, BI. Menos fricción, más control.',
  alternates: { canonical: '/servicios/integracion-sistemas' },
  openGraph: { type: 'website', url: `${SITE_URL}/servicios/integracion-sistemas` },
}

export default function Page() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Integración de sistemas',
    provider: { '@type': 'Organization', name: 'LX3' },
    areaServed: 'LatAm',
    url: `${SITE_URL}/servicios/integracion-sistemas`,
  }
  return (
    <div className="container-max">
      <Script id="ld-service-integracion" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHeader title="Integración de sistemas" subtitle="APIs y conectores para un stack unificado: ERP, e‑commerce, CRM y BI." />
      <div className="prose prose-invert mt-4">
        <h2>APIs y conectores</h2>
        <p>Diseño de APIs, colas de mensajes y ETLs controladas.</p>
        <h2>Orquestación</h2>
        <p>Sincronización y consistencia de datos entre sistemas clave.</p>
        <h2>Seguridad</h2>
        <p>Autenticación, autorización, auditoría y observabilidad.</p>
      </div>
    </div>
  )
}


