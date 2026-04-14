import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Giroto Táxi Umuarama 24h'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>🚖</div>
        <div style={{
          fontSize: 64,
          fontWeight: 'bold',
          color: '#F5C518',
          textAlign: 'center',
          lineHeight: 1.2,
          marginBottom: 20,
        }}>
          Giroto Táxi Umuarama
        </div>
        <div style={{
          fontSize: 36,
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: 30,
        }}>
          Táxi 24h • Rápido e Seguro
        </div>
        <div style={{
          fontSize: 28,
          color: '#22c55e',
          fontWeight: 'bold',
        }}>
          (44) 99891-3040
        </div>
      </div>
    ),
    { ...size }
  )
}