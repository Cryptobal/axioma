import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { title: string; subtitle?: string }

export function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="container-max pt-24 pb-6">
        <Breadcrumbs />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-zinc-300 mt-2 max-w-3xl">{subtitle}</p>}
      </div>
    </section>
  )
}


