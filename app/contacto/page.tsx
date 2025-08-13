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
import Image from 'next/image'

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
      setToast({ title: 'Ocurrió un error', desc: 'Inténtalo más tarde o escribe a hola@lx3.ai' })
      setOpen(true)
    }
  }

  return (
    <ToastProvider>
      <div className="container-max">
        <Script id="ld-contact" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ContactPoint', contactType: 'sales', url: 'https://www.lx3.ai/contacto' }) }} />
        <PageHeader title="Conversemos" subtitle="Cuéntanos tu contexto y agenda un diagnóstico sin costo. Respondemos en 24–48h hábiles." />
        <div className="rounded-2xl overflow-hidden relative mt-2">
          <div className="relative h-40 sm:h-56 md:h-72">
            <Image src="/Images/Imagen de Adobe Stock.jpeg" alt="Paneles de datos y dashboards" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-xs uppercase tracking-wide opacity-80">Contacto</div>
              <div className="text-lg font-medium">Hablemos de tu proyecto</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {/* Formulario */}
          <div className="md:col-span-2">
            <div className="glass rounded-2xl overflow-hidden">
              <div className="relative h-16 md:h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
              </div>
              <div className="p-5 md:p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Nombre</label>
                      <Input aria-invalid={!!errors.name} {...register('name')} placeholder="Tu nombre" />
                      {errors.name && <span className="text-xs text-red-400">{errors.name.message as string}</span>}
                    </div>
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Email</label>
                      <Input aria-invalid={!!errors.email} {...register('email')} placeholder="tu@email.com" type="email" />
                      {errors.email && <span className="text-xs text-red-400">{errors.email.message as string}</span>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Celular *</label>
                      <Input aria-invalid={!!errors.phone} {...register('phone')} placeholder="912345678" type="tel" />
                      {errors.phone && <span className="text-xs text-red-400">{errors.phone.message as string}</span>}
                    </div>
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Página web *</label>
                      <Input aria-invalid={!!errors.website} {...register('website')} placeholder="https://tuempresa.com" type="url" />
                      {errors.website && <span className="text-xs text-red-400">{errors.website.message as string}</span>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Empresa (opcional)</label>
                      <Input {...register('company')} placeholder="Nombre de empresa" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-500 dark:text-zinc-400">Tamaño</label>
                      <Select onValueChange={(v) => setValue('size', v)}>
                        <SelectTrigger aria-invalid={!!errors.size}><SelectValue placeholder="Selecciona" /></SelectTrigger>
                        <SelectContent>
                          {['1-10','11-50','51-200','200+'].map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                        </SelectContent>
                      </Select>
                      {errors.size && <span className="text-xs text-red-400">{errors.size.message as string}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-zinc-500 dark:text-zinc-400">Dolor principal</label>
                    <Select onValueChange={(v) => setValue('pain', v)}>
                      <SelectTrigger aria-invalid={!!errors.pain}><SelectValue placeholder="Selecciona" /></SelectTrigger>
                      <SelectContent>
                        {['Costos', 'Errores manuales', 'Reporting', 'Silos', 'Trazabilidad', 'Escalado'].map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                      </SelectContent>
                    </Select>
                    {errors.pain && <span className="text-xs text-red-400">{errors.pain.message as string}</span>}
                  </div>
                  <div>
                    <label className="text-xs text-zinc-500 dark:text-zinc-400">Mensaje</label>
                    <Textarea aria-invalid={!!errors.message} {...register('message')} placeholder="Cuéntanos tu necesidad" className="h-28" />
                    {errors.message && <span className="text-xs text-red-400">{errors.message.message as string}</span>}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button type="submit" disabled={isSubmitting}>Enviar</Button>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">o escríbenos a <a className="text-primary" href="mailto:hola@lx3.ai">hola@lx3.ai</a></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Información */}
          <div>
            <div className="glass rounded-2xl p-5 md:p-6">
              <div className="text-sm font-medium">Información</div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Tiempo de respuesta: 24–48h hábiles</li>
                <li>Zona horaria: GMT-3</li>
                <li>Email: <a href="mailto:hola@lx3.ai" className="text-primary">hola@lx3.ai</a></li>
              </ul>
              <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">Protegemos tus datos. Lee nuestra <a className="text-primary" href="/privacidad">política de privacidad</a>.</div>
            </div>
          </div>
        </div>
      </div>
      {toast && <Toast open={open} onOpenChange={setOpen} title={toast.title} description={toast.desc} />}
    </ToastProvider>
  )
}


