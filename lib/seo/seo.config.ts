import { PRIMARY_DOMAIN } from '@/config/site'

export const seoDefaults = {
  title: 'LX3 - Sistemas de IA y Automatización',
  description:
    'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
  canonical: PRIMARY_DOMAIN,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: PRIMARY_DOMAIN,
    siteName: 'LX3',
    images: [
      {
        url: `${PRIMARY_DOMAIN}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'LX3 - Sistemas de IA y Automatización',
      },
    ],
    title: 'LX3 - Sistemas de IA y Automatización',
    description:
      'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lx3_ai',
    title: 'LX3 - Sistemas de IA y Automatización',
    description:
      'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
    images: [`${PRIMARY_DOMAIN}/opengraph-image.jpg`],
  },
}


