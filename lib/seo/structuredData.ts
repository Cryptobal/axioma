import { PRIMARY_DOMAIN } from '@/config/site'

export function orgLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LX3',
    url: PRIMARY_DOMAIN,
    logo: `${PRIMARY_DOMAIN}/opengraph-image` ,
  }
}

export function webSiteLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LX3',
    url: PRIMARY_DOMAIN,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${PRIMARY_DOMAIN}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbsLD(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}


