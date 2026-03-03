import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '한글Wave — Learn Korean Through K-pop',
  description: 'Decode K-pop lyrics line by line. Learn real Korean grammar from the songs you already love.',
  keywords: 'learn korean, kpop korean, korean lyrics, hangul, BTS korean, learn korean online',
  openGraph: {
    title: '한글Wave — Learn Korean Through K-pop',
    description: 'Decode K-pop lyrics line by line.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
