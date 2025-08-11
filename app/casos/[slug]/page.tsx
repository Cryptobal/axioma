import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
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
  return (
    <div className="container-max">
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: frontmatter.title, about: frontmatter.industry }) }} />
      <PageHeader title={frontmatter.title} subtitle={`Industria: ${frontmatter.industry || ''}`} />
      <article className="prose prose-invert mt-4">{source}</article>
    </div>
  )
}


