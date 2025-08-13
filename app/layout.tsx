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

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'LX3 - Sistemas de IA y Automatización',
    template: '%s | LX3'
  },
  description: 'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
  keywords: [
    'inteligencia artificial',
    'IA',
    'automatización de procesos',
    'automatización empresarial',
    'sistemas empresariales',
    'software a medida',
    'desarrollo de software',
    'consultoría tecnológica',
    'consultoría de automatización',
    'transformación digital',
    'integración de sistemas',
    'integraciones API',
    'ERP modular',
    'orquestación de procesos',
    'arquitectura de datos',
    'eficiencia operativa',
    'productividad',
    'reducción de costos',
    'reporting KPIs',
    'logística automatizada',
    'pricing dinámico retail',
    'flujo de caja con IA',
    'nómina automatizada',
    'MVP 30 días',
  ],
  authors: [{ name: 'LX3' }],
  creator: 'LX3',
  publisher: 'LX3',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lx3.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://lx3.ai',
    title: 'LX3 - Sistemas de IA y Automatización',
    description: 'Creamos sistemas de inteligencia artificial y automatización para empresas. Transformamos estrategias en sistemas productivos en 30 días.',
    siteName: 'LX3',
    images: [
      {
        url: '/opengraph-image.jpg',
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
    images: ['/opengraph-image.jpg'],
    creator: '@lx3_ai',
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
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </head>
      <body className={inter.className}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Seo />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


