'use client'
import Link from 'next/link'
import React from 'react'
import type { Header } from '@/payload-types'
import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="relative z-20 bg-[#0f172a] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-12 py-5 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
