"use client"
import * as React from 'react'
import Head from 'next/head'
import { seoDefaults } from '@/lib/seo/seo.config'

export default function SeoHead() {
  console.log('SeoHead OK')

  return (
    <Head>
      <title>{seoDefaults.title}</title>
      <meta name="description" content={seoDefaults.description} />
      <link rel="canonical" href={seoDefaults.canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={seoDefaults.openGraph.type} />
      <meta property="og:locale" content={seoDefaults.openGraph.locale} />
      <meta property="og:url" content={seoDefaults.openGraph.url} />
      <meta property="og:site_name" content={seoDefaults.openGraph.siteName} />
      <meta property="og:title" content={seoDefaults.openGraph.title} />
      <meta property="og:description" content={seoDefaults.openGraph.description} />
      {seoDefaults.openGraph.images?.map((img) => (
        <React.Fragment key={`og:image:${img.url}`}>
          <meta property="og:image" content={img.url} />
          {img.width ? <meta property="og:image:width" content={String(img.width)} /> : null}
          {img.height ? <meta property="og:image:height" content={String(img.height)} /> : null}
          {img.alt ? <meta property="og:image:alt" content={img.alt} /> : null}
        </React.Fragment>
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={seoDefaults.twitter.card} />
      {seoDefaults.twitter.creator ? (
        <meta name="twitter:creator" content={seoDefaults.twitter.creator} />
      ) : null}
      <meta name="twitter:title" content={seoDefaults.twitter.title} />
      <meta name="twitter:description" content={seoDefaults.twitter.description} />
      {seoDefaults.twitter.images?.[0] ? (
        <meta name="twitter:image" content={seoDefaults.twitter.images[0]} />
      ) : null}
    </Head>
  )
}


