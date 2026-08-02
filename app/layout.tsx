import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Sivakavi --Software Developer',
  description: 'Software Developer building intelligent, scalable applications with AI and modern web technologies.',
  icons: {
    icon: [
      {
        url: '/sivamain.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/sivamain.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/sivamain.png',
        type: 'image/png',
      },
    ],
    apple: '/sivamain.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0C0C0C' }],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${kanit.variable} bg-[#0C0C0C]`}>
      <body className="font-kanit antialiased" style={{ fontFamily: 'var(--font-kanit)' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
