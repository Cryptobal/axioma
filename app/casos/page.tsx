import { listMDX } from '@/lib/mdx'
import { CardCase } from '@/components/card-case'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Casos de éxito',
  description: 'Resultados medibles con software a medida e IA. Lee los casos completos y los KPIs logrados.',
}

export default async function Page() {
  const items = await listMDX('casos')
  return (
    <div className="container-max">
      <Script id="ld-casos" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Casos de éxito' }) }} />
      <PageHeader title="Casos de éxito" subtitle="Explora nuestros proyectos, resultados y aprendizajes con KPIs medibles." />
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">
        {items.map((c) => {
          const defStack = ['Next.js', 'Python', 'Postgres', 'LLMs']
          const fullStack = [...new Set([...(c.stack || []), ...defStack, 'Make.com', 'ChatGPT', 'ERP', 'CRM', 'Integraciones'])]
          const tag1 = c.tags?.[0] || 'Eficiencia operativa +20%'
          const tag2 = c.tags?.[1] || 'Errores -15%'
          const parts1 = tag1.split(' ')
          const parts2 = tag2.split(' ')
          const m1Value = parts1[parts1.length - 1] || '+20%'
          const m2Value = parts2[parts2.length - 1] || '-15%'
          const m1Label = parts1.slice(0, -1).join(' ') || 'KPI principal'
          const m2Label = parts2.slice(0, -1).join(' ') || 'KPI secundario'
          const iconKey = /logistica|erp/i.test(c.slug || '')
            ? 'boxes'
            : /retail|pricing/i.test(c.slug || '')
            ? 'shopping-cart'
            : /seguridad|turnos/i.test(c.slug || '')
            ? 'shield'
            : /finanzas|caja/i.test(c.slug || '')
            ? 'banknote'
            : /payroll/i.test(c.slug || '')
            ? 'cog'
            : 'line-chart'
          return (
            <CardCase
              key={c.slug}
              href={`/casos/${c.slug}`}
              title={c.title}
              description={c.description || ''}
              metrics={[{ label: m1Label, value: m1Value }, { label: m2Label, value: m2Value }]}
              stack={fullStack}
              iconKey={iconKey}
            />
          )
        })}
      </div>
      <div className="mt-10"><Link href="/contacto" className="text-primary">Agenda diagnóstico</Link></div>
    </div>
  )
}


