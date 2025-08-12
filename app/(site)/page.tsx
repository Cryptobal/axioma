import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Logos } from '@/components/logos'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'
import { CardCase } from '@/components/card-case'
import type { Metadata } from 'next'
import { homeMetadata } from '@/lib/seo'
import Script from 'next/script'
import Link from 'next/link'
import { listMDX } from '@/lib/mdx'

export const metadata: Metadata = homeMetadata

export default async function HomePage() {
  const cases = (await listMDX('casos')).slice(0, 3)
  return (
    <>
      <Script
        id="ld-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Axima — Automatización y software a medida con IA',
            url: 'https://www.axima.com',
          }),
        }}
      />
      <Hero />
      <Features />
      <Logos />

      <section className="container-max mt-16">
        <h2 className="text-xl font-semibold tracking-tight">Resultados que hablan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {cases.map((c) => {
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
        <div className="mt-6"><Link className="text-primary" href="/casos">Ver más casos →</Link></div>
      </section>

      <Testimonials />
      <CTA />
    </>
  )
}


