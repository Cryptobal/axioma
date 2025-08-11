import Link from 'next/link'
import { listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas prácticas sobre automatización, ERP, APIs e IA aplicada.',
}

export default async function Page() {
  const posts = await listMDX('blog')
  return (
    <div className="container-max">
      <Script id="ld-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Blog' }) }} />
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <ul className="mt-4 space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link className="text-primary" href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


