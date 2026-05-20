import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto">
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <nav className="flex flex-wrap gap-6">
            {navItems.map(({ link }, i) => (
              <CMSLink key={i} {...link} className="text-sm text-muted-foreground hover:text-foreground transition-colors" />
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© 2025 - All rights reserved</p>
        </div>
      </div>
      <div className="bg-[#C8F000] overflow-hidden">
        <div className="container">
          <p className="font-serif font-bold text-[#1a2a0a] leading-none py-4 select-none" style={{ fontSize: 'clamp(4rem, 12vw, 14rem)' }}>
            Aetherfield
          </p>
        </div>
      </div>
    </footer>
  )
}
