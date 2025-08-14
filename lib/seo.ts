import type { Metadata } from 'next'
import type { DefaultSeoProps } from 'next-seo'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lx3.ai'

export function absoluteUrl(path: string = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean}`
}

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: 'LX3 — Transformación digital para PyMEs',
  titleTemplate: '%s | LX3',
  description:
    'Integración de sistemas, ERP modular en la nube, automatización con IA y apps internas para PyMEs. MVP en 30–90 días.',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'LX3 — Transformación digital para PyMEs',
    description:
      'Integración de sistemas, ERP modular en la nube, automatización con IA y apps internas para PyMEs. MVP en 30–90 días.',
    siteName: 'LX3',
    locale: 'es_CL',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'LX3' }],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@lx3_ai',
    handle: '@lx3_ai',
  },
}

export const homeMetadata: Metadata = {
  title: 'Transformación digital para PyMEs | LX3',
  description:
    'Integración de sistemas, ERP modular en la nube, automatización con IA y apps internas para PyMEs. MVP en 30–90 días.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Transformación digital para PyMEs | LX3',
    description:
      'Integramos tus sistemas, automatizamos procesos y construimos ERP modular y apps internas. MVP en 30–90 días.',
    type: 'website',
    url: SITE_URL,
    siteName: 'LX3',
    locale: 'es_CL',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'LX3' }],
  },
}



