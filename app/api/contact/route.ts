import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/zod'

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const parse = contactSchema.safeParse(json)
    if (!parse.success) {
      return NextResponse.json({ ok: false, errors: parse.error.flatten() }, { status: 400 })
    }
    // TODO: enviar email o guardar en CRM
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}


