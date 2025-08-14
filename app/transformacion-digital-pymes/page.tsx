import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Transformación digital para PyMEs | LX3',
  description: 'Beneficios medibles, roadmap de 30–90 días, casos y FAQs.',
  alternates: { canonical: '/transformacion-digital-pymes' },
}

export default function Page() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Transformación digital para PyMEs', item: `${SITE_URL}/transformacion-digital-pymes` },
    ],
  }
  return (
    <div className="container-max">
      <Script id="ld-pilar-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHeader title="Transformación digital para PyMEs" subtitle="Beneficios medibles y roadmap de 30–90 días." />
      <div className="prose prose-invert mt-4">
        <h2>Beneficios medibles</h2>
        <ul>
          <li>Time‑to‑Value real: entregas quincenales</li>
          <li>Diseño modular: crece por módulos, sin deuda técnica</li>
          <li>Integraciones abiertas: APIs, e‑commerce, CRM, BI</li>
          <li>IA aplicada: menos tareas repetitivas, mejores decisiones</li>
        </ul>
        <h2>Roadmap 30–90 días</h2>
        <p>Blueprint ejecutivo, MVP funcional y evolución continua.</p>
        <h2>Casos y resultados</h2>
        <p>Ejemplos reales por industria con métricas antes/después.</p>
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Qué es transformación digital para PyMEs?</summary>
          <p>Estrategia enfocada en procesos y datos, habilitada por software.</p>
        </details>
      </div>
    </div>
  )
}


