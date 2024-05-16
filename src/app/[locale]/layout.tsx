import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BackgroundBeams } from '@/components/ui/background-beams/background-beams'
import { FloatingNav } from '@/components/ui/floating-nav/floating-nav'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Rocha',
  description: 'Projeto Portfólio Matheus Rocha'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const gaEnvId = process.env.NEXT_GOOGLE_ANALYTICS_ID || ''
  const messages = await getMessages()
  return (
    <html>
      <body className={`${inter.className} bg-black`}>
        <BackgroundBeams />
        <NextIntlClientProvider messages={messages}>
          <FloatingNav />
          {children}
          <GoogleAnalytics gaId={gaEnvId} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
