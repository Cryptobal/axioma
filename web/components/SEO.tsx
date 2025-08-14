import React from 'react'

type MetaProps = {
  title: string
  description: string
  canonical: string
  og?: {
    title?: string
    description?: string
    url?: string
    type?: string
    siteName?: string
    locale?: string
    image?: string
  }
  twitter?: {
    card?: 'summary_large_image' | 'summary'
    site?: string
    title?: string
    description?: string
    image?: string
  }
  jsonLd?: object
}

export function SEO({ title, description, canonical, og, twitter, jsonLd }: MetaProps) {
  const ogTitle = og?.title ?? title
  const ogDescription = og?.description ?? description
  const ogUrl = og?.url ?? canonical
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={og?.type ?? 'website'} />
      {og?.siteName && <meta property="og:site_name" content={og.siteName} />}
      {og?.locale && <meta property="og:locale" content={og.locale} />}      
      {og?.image && <meta property="og:image" content={og.image} />}

      <meta name="twitter:card" content={twitter?.card ?? 'summary_large_image'} />
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      <meta name="twitter:title" content={twitter?.title ?? title} />
      <meta name="twitter:description" content={twitter?.description ?? description} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  )
}


