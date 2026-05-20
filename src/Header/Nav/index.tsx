'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import type { Header } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: Header }> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <nav className="flex items-center gap-1">
      <ul className="hidden md:flex items-center gap-1">
        {navItems.map(({ link }, i) => (
          <li key={i}>
            <CMSLink
              {...link}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            />
          </li>
        ))}
      </ul>
      <button
        className="ml-4 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        Get in touch
      </button>
    </nav>
  )
}
