import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #0a0a0a, #111827)',
          color: 'white',
          padding: 64,
          fontSize: 56,
        }}
      >
        <div style={{ fontWeight: 700 }}>Axima</div>
        <div style={{ fontSize: 28, marginTop: 8, opacity: 0.9 }}>Automatización y software a medida con IA</div>
      </div>
    ),
    { ...size }
  )
}


