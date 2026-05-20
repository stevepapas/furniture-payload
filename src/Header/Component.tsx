import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function SiteHeader() {
  let navLinks: { label: string; url: string }[] = []

  try {
    const payload = await getPayload({ config })
    const header = await payload.findGlobal({ slug: 'header' })
    navLinks = (header?.navLinks as { label: string; url: string }[]) || []
  } catch {
    navLinks = []
  }

  return (
    <header className="relative z-20 bg-[#0f172a] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">Aetherfield</Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/admin" className="ml-3 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Get in touch</Link>
        </nav>
      </div>
    </header>
  )
}
