import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { PageHeader } from '@/components/page-header'
import Script from 'next/script'
import { type LucideIcon, Shield, Boxes, ShoppingCart, Building2, Briefcase, HeartPulse, Factory, Zap, Banknote, RadioTower, GraduationCap, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industrias y soluciones',
  description: 'Soluciones por industria: seguridad privada, logística, retail, construcción, servicios profesionales y salud.',
}

type Sector = { slug: string; name: string; desc: string }

const sectors: Sector[] = [
  { slug: 'seguridad-privada', name: 'Seguridad privada', desc: 'Turnos, coberturas, control de horas y nómina con IA.' },
  { slug: 'logistica', name: 'Logística', desc: 'Órdenes, picking, distribución, OTIF y trazabilidad.' },
  { slug: 'retail', name: 'Retail', desc: 'Pricing dinámico, forecast y reposición asistida.' },
  { slug: 'construccion', name: 'Construcción', desc: 'Obra, compras, certificaciones y costos.' },
  { slug: 'servicios-profesionales', name: 'Servicios profesionales', desc: 'Horas, facturación, CRM e insights de rentabilidad.' },
  { slug: 'salud', name: 'Salud', desc: 'Agenda, admisión, glosas y cumplimiento.' },
  // Nuevas industrias
  { slug: 'manufactura', name: 'Manufactura', desc: 'OEE, mantenimiento y calidad.' },
  { slug: 'energia', name: 'Energía', desc: 'Mediciones, conciliaciones y continuidad.' },
  { slug: 'banca-finanzas', name: 'Banca y finanzas', desc: 'Onboarding, riesgo, conciliaciones y fraude.' },
  { slug: 'telecomunicaciones', name: 'Telecomunicaciones', desc: 'Churn, tickets y forecast de red.' },
  { slug: 'educacion', name: 'Educación', desc: 'Matrícula, pagos y retención.' },
  { slug: 'transporte', name: 'Transporte', desc: 'Ruteo, mantenimiento y seguridad.' },
]

const ICONS: Record<string, LucideIcon> = {
  'seguridad-privada': Shield,
  'logistica': Boxes,
  'retail': ShoppingCart,
  'construccion': Building2,
  'servicios-profesionales': Briefcase,
  'salud': HeartPulse,
  'manufactura': Factory,
  'energia': Zap,
  'banca-finanzas': Banknote,
  'telecomunicaciones': RadioTower,
  'educacion': GraduationCap,
  'transporte': Truck,
}

export default function Page() {
  return (
    <div className="container-max">
      <Script id="ld-industries" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Industrias', url: 'https://www.axima.com/industrias' }),
      }} />
      <PageHeader title="Industrias" subtitle="Conocemos los matices de cada sector y proponemos soluciones modulares y trazables que reducen costos y mejoran el control operativo." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {sectors.map((s) => {
          const Icon = ICONS[s.slug]
          return (
            <Card key={s.slug} className="overflow-hidden">
              <div className="relative h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                {Icon ? (
                  <span className="absolute top-3 left-3 inline-flex items-center justify-center rounded-2xl bg-primary/15 text-primary/70 ring-1 ring-primary/20 p-2 md:p-3">
                    <Icon className="size-7 md:size-9" />
                  </span>
                ) : null}
              </div>
              <div className="p-5 md:p-6">
                <div className="font-medium">{s.name}</div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{s.desc}</p>
                <Link href={`/industrias/${s.slug}` as any} className="text-primary text-sm inline-block mt-3">Ver solución →</Link>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}


