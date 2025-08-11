import { listMDX } from '@/lib/mdx'
import { CardCase } from '@/components/card-case'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Casos de éxito',
  description: 'Resultados medibles con software a medida e IA. Lee los casos completos y los KPIs logrados.',
}

export default async function Page() {
  const items = await listMDX('casos')
  return (
    <div className="container-max">
      <Script id="ld-casos" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Casos de éxito' }) }} />
      <Breadcrumbs />
      <h1 className="text-3xl font-semibold tracking-tight">Casos de éxito</h1>
      <p className="text-zinc-400 mt-2">Explora nuestros proyectos y resultados.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {items.map((c) => {
          const m1 = c.tags?.[0]?.split(' ')?.slice(-1)[0] || '+20%'
          const m2 = c.tags?.[1]?.split(' ')?.slice(-1)[0] || '-15%'
          return (
            <CardCase key={c.slug} href={`/casos/${c.slug}`} title={c.title} description={c.description || ''} metrics={[{ label: 'KPI 1', value: m1 }, { label: 'KPI 2', value: m2 }]} stack={(c as any).stack} />
          )
        })}
      </div>
      <div className="mt-10"><Link href="/contacto" className="text-primary">Agenda diagnóstico</Link></div>
    </div>
  )
}


