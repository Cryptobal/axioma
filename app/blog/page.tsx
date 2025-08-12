import Link from 'next/link'
import { listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { BlogGrid } from '@/components/blog-grid'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas prácticas sobre automatización, ERP, APIs e IA aplicada.',
}

export default async function Page() {
  const posts = await listMDX('blog')
  return (
    <div className="container-max">
      <Script id="ld-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Blog' }) }} />
      <PageHeader title="Blog — LX3" subtitle="Ideas prácticas sobre automatización, ERP, APIs e IA aplicada." />
      <BlogGrid posts={posts as any} />
    </div>
  )
}


