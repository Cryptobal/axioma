import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | LX3',
  description: 'Agenda un diagnóstico y prioriza quick wins en 30–90 días.',
  alternates: { canonical: '/contacto' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}


