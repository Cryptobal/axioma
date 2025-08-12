"use client"
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactSchema } from '@/lib/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Toast, ToastProvider } from '@/components/ui/toast'
import Script from 'next/script'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'

type FormValues = z.infer<typeof contactSchema & any>

const formSchema = contactSchema.extend({
  size: z.string().min(1, 'Selecciona un tamaño'),
  pain: z.string().min(1, 'Selecciona un dolor principal'),
})

export default function Page() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState<{ title: string; desc?: string } | null>(null)
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setToast(null)
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
    if (res.ok) {
      setToast({ title: 'Recibido 👌', desc: 'Te contactamos en 24–48h hábiles.' })
      setOpen(true)
    } else {
      setToast({ title: 'Ocurrió un error', desc: 'Inténtalo más tarde o escribe a contacto@axima.com' })
      setOpen(true)
    }
  }

  return (
    <ToastProvider>
      <div className="container-max">
        <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ContactPoint', contactType: 'sales', url: 'https://www.axima.com/contacto' }) }} />
        <PageHeader title="Contacto" subtitle="Cuéntanos tu contexto y agenda un diagnóstico sin costo." />
        <div className="glass rounded-2xl overflow-hidden">
          <div className="relative h-20 md:h-24">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="text-sm text-zinc-600 dark:text-zinc-300">Responden personas, no bots. Típicamente en 24–48h hábiles.</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4 max-w-xl">
          <Input aria-invalid={!!errors.name} {...register('name')} placeholder="Nombre" />
          {errors.name && <span className="text-xs text-red-400">{errors.name.message as string}</span>}
          <Input aria-invalid={!!errors.email} {...register('email')} placeholder="Email" type="email" />
          {errors.email && <span className="text-xs text-red-400">{errors.email.message as string}</span>}
          <Input {...register('company')} placeholder="Empresa (opcional)" />
          <Select onValueChange={(v) => setValue('size', v)}>
            <SelectTrigger aria-invalid={!!errors.size}><SelectValue placeholder="Tamaño de empresa" /></SelectTrigger>
            <SelectContent>
              {['1-10','11-50','51-200','200+'].map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
          {errors.size && <span className="text-xs text-red-400">{errors.size.message as string}</span>}
          <Select onValueChange={(v) => setValue('pain', v)}>
            <SelectTrigger aria-invalid={!!errors.pain}><SelectValue placeholder="Dolor principal" /></SelectTrigger>
            <SelectContent>
              {['Costos', 'Errores manuales', 'Reporting', 'Silos', 'Trazabilidad', 'Escalado'].map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
          {errors.pain && <span className="text-xs text-red-400">{errors.pain.message as string}</span>}
          <Textarea aria-invalid={!!errors.message} {...register('message')} placeholder="Cuéntanos tu necesidad" className="h-28" />
          {errors.message && <span className="text-xs text-red-400">{errors.message.message as string}</span>}
          <Button type="submit" disabled={isSubmitting}>Enviar</Button>
          <p className="text-sm text-zinc-400">También puedes escribirnos y ver nuestros <Link className="text-primary" href="/casos">casos</Link> o <Link className="text-primary" href="/servicios">servicios</Link>.</p>
        </form>
      </div>
      {toast && <Toast open={open} onOpenChange={setOpen} title={toast.title} description={toast.desc} />}
    </ToastProvider>
  )
}


