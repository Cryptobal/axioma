import { NextResponse } from 'next/server'
import { contactApiSchema } from '@/lib/zod'
import { Resend } from 'resend'

const WINDOW_MS = 60_000
const MAX_REQ = 5
const store = new Map<string, { count: number; ts: number }>()

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const now = Date.now()
    const rec = store.get(ip)
    if (!rec || now - rec.ts > WINDOW_MS) {
      store.set(ip, { count: 1, ts: now })
    } else {
      if (rec.count >= MAX_REQ) {
        return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
      }
      rec.count += 1
      store.set(ip, rec)
    }

    const json = await request.json()
    const parse = contactApiSchema.safeParse(json)
    if (!parse.success) {
      return NextResponse.json({ ok: false, errors: parse.error.flatten() }, { status: 400 })
    }
    const data = parse.data

    // Envío por email usando Resend
    const apiKey = process.env.RESEND_API_KEY
    if (apiKey) {
      const resend = new Resend(apiKey)
      const subject = `Nuevo contacto LX3 — ${data.name}`
      const lines = [
        `Nombre: ${data.name}`,
        `Email: ${data.email}`,
        `Empresa: ${data.company || '-'}`,
        `Tamaño: ${data.size}`,
        `Dolor principal: ${data.pain}`,
        '',
        data.message,
      ]
      const text = lines.join('\n')
      const html = `
        <div style="font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.5;">
          <h2>Nuevo contacto LX3</h2>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Empresa:</strong> ${data.company || '-'}</p>
          <p><strong>Tamaño:</strong> ${data.size}</p>
          <p><strong>Dolor principal:</strong> ${data.pain}</p>
          <hr/>
          <p>${data.message.replace(/\n/g, '<br/>')}</p>
        </div>
      `
      await resend.emails.send({
        from: 'LX3 Contacto <onboarding@resend.dev>',
        to: ['carlos.irigoyen@gmail.com'],
        subject,
        text,
        html,
      })
      return NextResponse.json({ ok: true })
    }

    // Fallback si no hay API Key
    console.log('CONTACTO (sin correo, faltó RESEND_API_KEY):', data)
    return NextResponse.json({ ok: true, note: 'Email no enviado (falta RESEND_API_KEY)' })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


