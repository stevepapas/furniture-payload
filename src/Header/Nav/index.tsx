import React from 'react'
import Link from 'next/link'

export function HeaderNav() {
  return (
    <nav className="flex items-center gap-1">
      <Link
        href="/"
        className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
      >
        Work
      </Link>
      <Link
        href="/"
        className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
      >
        About
      </Link>
      <Link
        href="/admin"
        className="ml-3 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Get in touch
      </Link>
    </nav>
  )
}
