import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  if (process.env.ENABLE_WWW_REDIRECT === '1') {
    const url = new URL(request.url)
    const hostname = url.hostname
    if (hostname === 'lx3.ai') {
      url.hostname = 'www.lx3.ai'
      return NextResponse.redirect(url, 308)
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
}


