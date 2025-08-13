import { listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { BlogGrid } from '@/components/blog-grid'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas prácticas sobre automatización, ERP, APIs e IA aplicada.',
}

export default async function Page() {
  const posts = await listMDX('blog')
  const items = posts.map((p: any, idx: number) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@id': `${SITE_URL}/blog/${p.slug}`,
      name: p.title,
    },
  }))
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    url: `${SITE_URL}/blog`,
    name: 'LX3 Blog',
    description: 'Ideas prácticas sobre automatización, ERP, APIs e IA aplicada.',
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  }
  const blogPostsLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items,
  }
  return (
    <div className="container-max">
      <Script id="ld-blog" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />
      <Script id="ld-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-blog-items" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostsLd) }} />
      <PageHeader title="Blog — LX3" subtitle="Ideas prácticas sobre automatización, ERP, APIs e IA aplicada." />
      <BlogGrid posts={posts as any} />
    </div>
  )
}


