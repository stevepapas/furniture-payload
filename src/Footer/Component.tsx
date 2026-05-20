import React from 'react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0f172a] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-12 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <span className="text-xl font-semibold tracking-tight text-white">Aetherfield</span>
          <p className="mt-1 text-sm text-slate-500">Design &amp; development studio.</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Work</Link>
          <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">About</Link>
          <Link href="/admin" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Admin</Link>
        </nav>
        <p className="text-sm text-slate-600">&#169; 2026 Aetherfield</p>
      </div>
    </footer>
  )
}
