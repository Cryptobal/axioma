import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Seo } from '@/components/seo'
import { PageTransition } from '@/components/page-transition'
import { SITE_URL } from '@/lib/seo'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Axima — Software a medida con IA',
  description:
    'Automatizamos tu operación con software a medida impulsado por IA. ERP a medida, flujos de caja, control operativo, payroll y automatizaciones.',
  metadataBase: new URL(SITE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Seo />
      <Script id="ld-org-global" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Axima',
          url: 'https://www.axima.com',
          logo: 'https://www.axima.com/opengraph-image',
        }),
      }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Axima',
          url: 'https://www.axima.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.axima.com/?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }),
      }} />
      <ThemeProvider>
        <Navbar />
        <main className="min-h-dvh pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </ThemeProvider>
      <Analytics />
    </>
  )
}


