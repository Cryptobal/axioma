import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = url.hostname
  // Fuerza www en producción
  if (hostname === 'lx3.ai') {
    url.hostname = 'www.lx3.ai'
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|.*\.(?:png|jpg|jpeg|svg|gif|webp|ico|txt|xml|json)).*)'],
}


