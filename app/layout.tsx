import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Seo } from '@/components/seo'
import { PageTransition } from '@/components/page-transition'
import { GoogleTagManager, GoogleAnalytics } from '@/components/gtm'
import Script from 'next/script'
import { SITE_URL } from '@/lib/seo'
import { BreadcrumbsJsonLdGlobal } from '@/components/breadcrumbs-jsonld'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LX3 - Sistemas de IA y Automatización',
    template: '%s | LX3'
  },
  description: 'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
  authors: [{ name: 'LX3' }],
  creator: 'LX3',
  publisher: 'LX3',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.lx3.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.lx3.ai',
    title: 'LX3 - Sistemas de IA y Automatización',
    description: 'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
    siteName: 'LX3',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LX3 - Sistemas de IA y Automatización',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LX3 - Sistemas de IA y Automatización',
    description: 'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
    images: ['/opengraph-image'],
    creator: '@lx3_ai',
    site: '@lx3_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        {process.env.NEXT_PUBLIC_GTM_ID ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
          </>
        ) : null}
        <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'LX3',
            url: SITE_URL,
            logo: `${SITE_URL}/opengraph-image.jpg`,
            sameAs: ['https://www.linkedin.com/company/lx3', 'https://x.com/lx3_ai'],
            contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'contacto@lx3.ai', areaServed: 'CL' }],
          }),
        }} />
        <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'LX3',
            url: SITE_URL,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Seo />
          <BreadcrumbsJsonLdGlobal />
          <Navbar />
          <main className="pt-20 md:pt-24">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


