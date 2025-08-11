import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'

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
    <div className="container-max prose prose-invert">
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: frontmatter.title, about: frontmatter.industry }) }} />
      <h1>{frontmatter.title}</h1>
      <p className="text-zinc-400 !mt-0">Industria: {frontmatter.industry}</p>
      {source}
    </div>
  )
}


