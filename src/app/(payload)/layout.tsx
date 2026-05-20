import React from 'react'
import { RootLayout } from '@payloadcms/next/layouts'
import config from '@payload-config'

export const metadata = {
  description: 'Payload Admin',
  title: 'Payload Admin',
}

const Layout = ({ children }: { children: React.ReactNode }) =>
  RootLayout({ children, config })

export default Layout
