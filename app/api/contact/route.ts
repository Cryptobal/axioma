import { NextResponse } from 'next/server'
import { contactApiSchema } from '@/lib/zod'

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
    // TODO: enviar email o guardar en CRM
    console.log('CONTACTO', parse.data)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


