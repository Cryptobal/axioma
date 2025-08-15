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
import { Button } from '@/components/ui/button'
import { listMDX } from '@/lib/mdx'
import { Section } from '@/components/section'

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
            name: 'Transformación digital para PyMEs | LX3',
            url: 'https://www.lx3.ai',
          }),
        }}
      />
      <section className="relative min-h-[60vh] flex items-center overflow-hidden mt-2 md:mt-3">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-section)] to-[var(--color-bg-default)] dark:from-zinc-900/60 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_50%_0%,_var(--tw-gradient-stops))] from-[color-mix(in_oklab,_var(--color-accent-brand)_25%,_transparent)] via-transparent to-transparent" />
        <div className="container-max relative">
          <div className="glass rounded-2xl p-4 md:p-12">
            <h1 className="text-2xl md:text-5xl font-semibold tracking-tight font-[var(--font-space-grotesk,_inherit)]" style={{ lineHeight: 1.2 }}>Transformación digital para PyMEs: integración, ERP modular y automatización con IA.</h1>
            <p className="mt-3 text-[color:var(--color-fg-muted)] dark:text-zinc-300 max-w-2xl text-[15px] md:text-base">Integramos tus sistemas, automatizamos procesos y construimos ERP modular y apps internas. MVP en 30–90 días.</p>
            <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-3">
              <Button asChild size="lg"><Link href="/contacto">Agenda diagnóstico</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/servicios">Ver demo</Link></Button>
              <Button asChild variant="outline" size="lg"><Link href="/casos">Casos</Link></Button>
            </div>
          </div>
        </div>
      </section>
      <Section variant="mesh"><Features /></Section>
      <Section variant="dots"><Logos /></Section>

      <Section className="mt-16">
        <div className="container-max">
          <h2 className="text-xl font-semibold tracking-tight">Pensado también para PyMEs</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl">Apoyamos a pequeñas y medianas empresas en su crecimiento y expansión, con aplicaciones internas que automatizan tareas repetitivas, estandarizan procesos y mejoran la trazabilidad.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {[
              'Automatizamos tareas iterativas y aprobaciones',
              'KPIs, reporting y control operativo',
              'MVP en 30–60 días para comenzar rápido',
            ].map((t) => (
              <div key={t} className="glass rounded-2xl p-4 text-sm text-zinc-600 dark:text-zinc-300">{t}</div>
            ))}
          </div>
          <div className="mt-4"><Link className="text-primary" href="/contacto?segment=pymes">Soy PyME →</Link></div>
        </div>
      </Section>

      <Section className="mt-16">
        <div className="container-max">
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
        </div>
      </Section>

      <Testimonials />
      <CTA />
    </>
  )
}


