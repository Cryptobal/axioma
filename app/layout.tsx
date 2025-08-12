import '@/app/globals.css'
import { Inter } from 'next/font/google'
import type { Viewport } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Seo } from '@/components/seo'
import { PageTransition } from '@/components/page-transition'
import { SITE_URL } from '@/lib/seo'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
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
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


