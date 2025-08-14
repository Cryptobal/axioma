"use client"
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { SITE_URL } from '@/lib/seo'

function buildBreadcrumbList(pathname: string) {
  const parts = pathname.split('/').filter(Boolean)
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
  ] as any[]
  parts.forEach((part, idx) => {
    const href = `${SITE_URL}/` + parts.slice(0, idx + 1).join('/')
    const label = part
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (m) => m.toUpperCase())
    items.push({ '@type': 'ListItem', position: idx + 2, name: label, item: href })
  })
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function BreadcrumbsJsonLdGlobal() {
  const pathname = usePathname()
  const json = buildBreadcrumbList(pathname)
  return (
    <Script id="ld-breadcrumbs-global" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  )
}


