import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'ERP modular en la nube | LX3',
  description: 'ERP modular por módulos: finanzas, compras, inventario, CRM. Integraciones abiertas y despliegue ágil.',
  alternates: { canonical: '/servicios/erp-modular-nube' },
  openGraph: { type: 'website', url: `${SITE_URL}/servicios/erp-modular-nube` },
}

export default function Page() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ERP modular en la nube',
    provider: { '@type': 'Organization', name: 'LX3' },
    areaServed: 'LatAm',
    url: `${SITE_URL}/servicios/erp-modular-nube`,
  }
  return (
    <div className="container-max">
      <Script id="ld-service-erp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <PageHeader title="ERP modular en la nube" subtitle="Módulos por etapas: finanzas, compras, inventario, CRM y más. Integraciones abiertas y despliegue ágil." />
      <div className="prose prose-invert mt-4">
        <h2>Módulos</h2>
        <ul>
          <li>Finanzas y contabilidad</li>
          <li>Compras y proveedores</li>
          <li>Inventario y logística</li>
          <li>CRM y ventas</li>
        </ul>
        <h2>Despliegue</h2>
        <p>Iteraciones quincenales y MVP en 30–90 días. Escalable por módulos, sin deuda técnica.</p>
        <h2>Integraciones</h2>
        <p>APIs abiertas y webhooks para conectar ERP, e‑commerce, CRM y BI.</p>
      </div>
    </div>
  )
}


