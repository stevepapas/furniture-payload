import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import config from '@payload-config'
import { importMap } from './admin/importMap.js'
import '@payloadcms/ui/styles.css'

export const metadata = {
  description: 'Payload Admin',
  title: 'Payload Admin',
}

type Args = {
  children: React.ReactNode
}

const Layout = async ({ children }: Args) => {
  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}

export default Layout
