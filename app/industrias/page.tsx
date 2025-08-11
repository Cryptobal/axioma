import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Breadcrumbs } from '@/components/breadcrumbs'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Industrias y soluciones',
  description: 'Soluciones por industria: seguridad privada, logística, retail, construcción, servicios profesionales y salud.',
}

const sectors = [
  { slug: 'seguridad-privada', name: 'Seguridad privada' },
  { slug: 'logistica', name: 'Logística' },
  { slug: 'retail', name: 'Retail' },
  { slug: 'construccion', name: 'Construcción' },
  { slug: 'servicios-profesionales', name: 'Servicios profesionales' },
  { slug: 'salud', name: 'Salud' },
 ] as const

export default function Page() {
  return (
    <div className="container-max">
      <Script id="ld-industries" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Industrias', url: 'https://www.axima.com/industrias' }),
      }} />
      <Breadcrumbs />
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">Industrias</h1>
      <p className="text-zinc-300 mt-3 max-w-3xl">Conocemos los matices de cada sector y proponemos soluciones modulares y trazables que reducen costos y mejoran el control operativo.</p>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {sectors.map((s) => (
          <Card key={s.slug}>
            <CardHeader>
              <div className="font-medium">{s.name}</div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">Diagnóstico, plataforma modular, automatizaciones con IA y APIs.</p>
              <Link href={`/industrias/${s.slug}` as any} className="text-primary text-sm inline-block mt-2">Ver solución →</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


