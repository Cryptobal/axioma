import { listMDX } from '@/lib/mdx'
import type { Metadata } from 'next'
import Script from 'next/script'
import { PageHeader } from '@/components/page-header'
import { BlogGrid } from '@/components/blog-grid'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Recursos y Blog | LX3',
  description: 'Guías y casos de automatización, integración y ERP para PyMEs.',
  alternates: { canonical: '/blog' },
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
    name: 'LX3 — Recursos y Blog',
    description: 'Guías y casos de automatización, integración y ERP para PyMEs.',
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Recursos', item: `${SITE_URL}/blog` },
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
      <PageHeader title="Recursos y Blog — LX3" subtitle="Guías y casos de automatización, integración y ERP para PyMEs." />
      <BlogGrid posts={posts as any} />
    </div>
  )
}


