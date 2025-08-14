import React from 'react'
import { SEO } from '../components/SEO'

export default function HomePage() {
  const canonical = 'https://www.lx3.ai/'
  return (
    <html lang="es">
      <head>
        <SEO
          title="Transformación digital para PyMEs | LX3"
          description="Integración de sistemas, ERP modular en la nube, automatización con IA y apps internas para PyMEs. MVP en 30–90 días."
          canonical={canonical}
          og={{ title: 'Transformación digital para PyMEs | LX3', description: 'Integramos tus sistemas, automatizamos procesos y construimos ERP modular y apps internas.', url: canonical, type: 'website', siteName: 'LX3', locale: 'es_CL', image: 'https://www.lx3.ai/opengraph-image.jpg' }}
          twitter={{ card: 'summary_large_image', site: '@lx3_ai', title: 'LX3 — Transformación digital para PyMEs', description: 'Integramos sistemas, automatizamos procesos y desarrollamos apps internas. MVP 30–90 días.', image: 'https://www.lx3.ai/opengraph-image.jpg' }}
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'LX3',
            url: 'https://www.lx3.ai',
            logo: 'https://www.lx3.ai/opengraph-image.jpg'
          }}
        />
      </head>
      <body>
        {/* Placeholder de contenido */}
        <main>
          <h1>Transformación digital para PyMEs</h1>
        </main>
      </body>
    </html>
  )
}


