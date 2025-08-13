import type { Metadata } from 'next'
import type { DefaultSeoProps } from 'next-seo'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lx3.ai'

export function absoluteUrl(path: string = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${clean}`
}

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: 'LX3 — Automatización y software a medida con IA',
  titleTemplate: '%s | LX3',
  description:
    'Desarrollamos software a medida con IA para optimizar procesos y escalar operaciones — para empresas y PyMEs. Aplicaciones internas que automatizan tareas y profesionalizan la gestión.',
  canonical: SITE_URL,
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'LX3 — Automatización y software a medida con IA',
    description:
      'Desarrollamos software a medida con IA para optimizar procesos y escalar operaciones — para empresas y PyMEs. Aplicaciones internas que automatizan tareas y profesionalizan la gestión.',
    siteName: 'LX3',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'LX3' }],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@lx3',
    handle: '@lx3',
  },
}

export const homeMetadata: Metadata = {
  title: 'Automatización y software a medida con IA',
  description:
    'Desarrollamos software a medida con IA para optimizar procesos y escalar operaciones — también para PyMEs. Aplicaciones internas que automatizan tareas y profesionalizan la gestión. Agenda diagnóstico.',
  openGraph: {
    title: 'Automatización y software a medida con IA',
    description:
      'Desarrollamos software a medida con IA para optimizar procesos y escalar operaciones — también para PyMEs. Aplicaciones internas que automatizan tareas y profesionalizan la gestión.',
    type: 'website',
    url: SITE_URL,
  },
}



