import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { title: string; subtitle?: string }

export function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-transparent dark:from-transparent dark:to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
      <div className="container-max pt-24 pb-8">
        <Breadcrumbs />
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-zinc-600 dark:text-zinc-300 mt-2 max-w-3xl">{subtitle}</p>}
      </div>
    </section>
  )
}


