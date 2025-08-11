import { readMDXFile, listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'

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
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { frontmatter, source, headings } = await readMDXFile('blog', params.slug)
  return (
    <div className="container-max">
      <Script id="ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: frontmatter.title }) }} />
      <div className="grid md:grid-cols-[260px,1fr] gap-8">
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


