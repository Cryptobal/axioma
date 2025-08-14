import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { SITE_URL } from '@/lib/seo'
import { PageHeader } from '@/components/page-header'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const posts = await listMDX('blog')
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = await readMDXFile('blog', params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: { canonical: `/blog/${params.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { frontmatter, source, headings } = await readMDXFile('blog', params.slug)
  const url = `${SITE_URL}/blog/${params.slug}`
  const keywords = frontmatter.keywords
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: [{ '@type': 'Organization', name: 'LX3' }],
    publisher: { '@type': 'Organization', name: 'LX3' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: `${SITE_URL}/opengraph-image`,
    keywords,
  }
  const faqLd = frontmatter.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: frontmatter.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : undefined
  return (
    <div className="container-max">
      <Script id="ld-blogposting" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd ? (
        <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      ) : null}
      <PageHeader title={frontmatter.title} subtitle={frontmatter.description} />
      <div className="grid md:grid-cols-[260px,1fr] gap-8 mt-2">
        <aside className="hidden md:block">
          <div className="glass rounded-2xl p-4 sticky top-24">
            <div className="text-sm font-medium">Tabla de contenidos</div>
            <ul className="mt-2 space-y-2 text-sm text-zinc-400">
              {headings?.map((h) => {
                const id = h.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                return (
                  <li key={id}><a className="hover:text-primary" href={`#${id}`}>{h}</a></li>
                )
              })}
            </ul>
          </div>
        </aside>
        <article className="prose prose-invert">
          <h1>{frontmatter.title}</h1>
          {source}
          <hr />
          <p>
            ¿Te interesa llevar estas ideas a la práctica? Revisa nuestros <a href="/servicios">servicios</a>
            {' '}o <a href="/contacto">contáctanos</a>.
          </p>
        </article>
      </div>
    </div>
  )
}


