import React from 'react'
import Link from 'next/link'

interface HeroProps {
  heading?: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}

export function HighImpactHero({
  heading = 'Design that moves people.',
  subheading = 'We craft digital experiences that are beautiful, functional, and built to last.',
  ctaLabel = 'See our work',
  ctaHref = '/',
}: HeroProps) {
  return (
    <section className="bg-[#0f172a] min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-12 py-20 md:py-32 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border-2 border-blue-600 text-blue-400 text-sm font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          Available for new projects
        </div>
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            {heading}
          </h1>
          <p className="text-slate-400 text-lg mt-5 leading-relaxed">
            {subheading}
          </p>
          <div className="flex gap-4 flex-wrap mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
