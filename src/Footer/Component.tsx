import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto bg-[#0f172a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-12 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <span className="text-xl font-semibold tracking-tight text-white">Aetherfield</span>
          <p className="mt-1 text-sm text-slate-500">Design &amp; development studio.</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {navItems.map(({ link }, i) => (
            <CMSLink
              key={i}
              {...link}
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
            />
          ))}
        </nav>
        <p className="text-sm text-slate-600">&copy; {new Date().getFullYear()} Aetherfield</p>
      </div>
    </footer>
  )
}
