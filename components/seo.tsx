"use client"
import dynamic from 'next/dynamic'
import { defaultSEO } from '@/lib/seo'

const DefaultSeoNoSSR = dynamic(async () => (await import('next-seo')).DefaultSeo, { ssr: false })

export function Seo() {
  return <DefaultSeoNoSSR {...defaultSEO} />
}


