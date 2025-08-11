import Image from 'next/image'

const testimonials = [
  { name: 'María López', role: 'COO, LogistiCo', text: 'Reducimos 35% el tiempo de ciclo en 3 meses.' },
  { name: 'Jorge Pérez', role: 'CFO, RetailX', text: 'Mejor visibilidad del flujo de caja y menos errores.' },
  { name: 'Ana García', role: 'HR Lead, PeoplePlus', text: 'Automatizamos payroll con validaciones robustas.' },
]

export function Testimonials() {
  return (
    <section className="container-max mt-16">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white/10">
                <Image src="/placeholder.svg" alt={`Foto de ${t.name}`} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-zinc-400">{t.role}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-300 mt-4">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  )
}


