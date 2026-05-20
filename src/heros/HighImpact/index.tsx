'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="bg-[#0f172a] min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-12 py-20 md:py-32 w-full">
        {/* Notification badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border-2 border-blue-600 text-blue-400 text-sm font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
          Available for new projects
        </div>

        <div className="max-w-3xl">
          {richText && (
            <RichText
              className="[&_h1]:text-white [&_h1]:text-5xl [&_h1]:md:text-6xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:tracking-tight [&_p]:text-slate-400 [&_p]:text-lg [&_p]:mt-5 [&_p]:leading-relaxed"
              data={richText}
              enableGutter={false}
            />
          )}

          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 flex-wrap mt-10">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink
                    {...link}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {media && typeof media === 'object' && (
          <div className="mt-20 rounded-xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-blue-900/10">
            <Media imgClassName="w-full h-auto" priority resource={media} />
          </div>
        )}
      </div>
    </section>
  )
}
