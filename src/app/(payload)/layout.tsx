import React from 'react'

export const metadata = {
  description: 'Payload Admin',
  title: 'Payload Admin',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
