import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
// SEO global con App Router se maneja vía `metadata`

export const metadata: Metadata = {
  title: 'Axima — Software a medida con IA',
  description:
    'Automatizamos tu operación con software a medida impulsado por IA. ERP a medida, flujos de caja, control operativo, payroll y automatizaciones.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        <Navbar />
        <main className="min-h-dvh pt-20">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}


