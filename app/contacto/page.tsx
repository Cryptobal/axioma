"use client"
import { useState } from 'react'
import { contactSchema } from '@/lib/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Page() {
  const [status, setStatus] = useState<string>('')
  async function onSubmit(formData: FormData) {
    setStatus('')
    const body = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      company: String(formData.get('company') || ''),
      message: String(formData.get('message') || ''),
    }
    const parse = contactSchema.safeParse(body)
    if (!parse.success) {
      setStatus('Revisa los datos del formulario')
      return
    }
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(body) })
    setStatus(res.ok ? 'Recibido, te contactamos pronto' : 'Ocurrió un error')
  }

  return (
    <div className="container-max">
      <h1 className="text-2xl font-semibold tracking-tight">Contacto</h1>
      <form action={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <Input name="name" placeholder="Nombre" />
        <Input name="email" placeholder="Email" />
        <Input name="company" placeholder="Empresa (opcional)" />
        <Textarea name="message" placeholder="Cuéntanos tu necesidad" className="h-28" />
        <Button type="submit">Enviar</Button>
        <p className="text-sm text-zinc-400">{status}</p>
      </form>
    </div>
  )
}


