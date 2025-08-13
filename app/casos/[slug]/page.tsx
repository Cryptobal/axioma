import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { SITE_URL } from '@/lib/seo'
import { PageHeader } from '@/components/page-header'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await listMDX('casos')
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = await readMDXFile('casos', params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default async function CasePage({ params }: Props) {
  const { frontmatter, source } = await readMDXFile('casos', params.slug)
  const defStack = ['Next.js', 'Python', 'Postgres', 'LLMs', 'Make.com', 'ChatGPT', 'ERP', 'CRM', 'Integraciones']
  const stack = Array.from(new Set([...(frontmatter.stack || []), ...defStack]))
  const tools = Array.from(new Set([...(frontmatter.tools || []), 'Excel/Sheets', 'Slack', 'Notion', 'HubSpot', 'ZohoCRM']))
  const url = `${SITE_URL}/casos/${params.slug}`
  const caseLd = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    headline: frontmatter.title,
    description: frontmatter.description,
    about: frontmatter.industry,
    keywords: frontmatter.keywords,
    datePublished: frontmatter.date,
    author: [{ '@type': 'Organization', name: 'LX3' }],
    publisher: { '@type': 'Organization', name: 'LX3' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/opengraph-image.jpg`,
    url,
  }
  return (
    <div className="container-max">
      <Script id="ld-casestudy" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseLd) }} />
      {frontmatter.faq ? (
        <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: frontmatter.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      ) : null}
      <PageHeader title={frontmatter.title} subtitle={`Industria: ${frontmatter.industry || ''}`} />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="prose prose-invert md:col-span-2">{source}</article>
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 dark:border-zinc-50/10 dark:bg-zinc-50/5">
            <div className="text-sm font-medium">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span key={s} className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 px-2 py-0.5 text-[11px] text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200">{s}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 mt-4 dark:border-zinc-50/10 dark:bg-zinc-50/5">
            <div className="text-sm font-medium">Herramientas</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((s) => (
                <span key={s} className="rounded-xl border border-zinc-900/10 bg-zinc-900/5 px-2 py-0.5 text-[11px] text-zinc-700 dark:border-zinc-50/10 dark:bg-zinc-50/5 dark:text-zinc-200">{s}</span>
              ))}
            </div>
          </div>
          {frontmatter.metrics && frontmatter.metrics.length > 0 ? (
            <div className="rounded-2xl border border-zinc-900/10 bg-zinc-900/5 p-4 mt-4 dark:border-zinc-50/10 dark:bg-zinc-50/5">
              <div className="text-sm font-medium">KPIs</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                {frontmatter.metrics.map((m) => (
                  <li key={m.label}><span className="text-primary font-medium">{m.value}</span> — {m.label}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  )
}


