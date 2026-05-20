import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { SiteHeader } from '@/Header/Component'
import { SiteFooter } from '@/Footer/Component'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'Aetherfield',
  description: 'Design & development studio.',
}
