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
    setHeaderTheme('light')
  })

  return (
    <div className="py-20 md:py-32 text-center">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {richText && (
            <RichText
              className="mb-6 [&_h1]:font-serif [&_h1]:text-5xl [&_h1]:md:text-6xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:tracking-tight"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center gap-4 flex-wrap mt-8">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
        {media && typeof media === 'object' && (
          <div className="mt-16 rounded-xl overflow-hidden border border-border shadow-xl">
            <Media imgClassName="w-full h-auto" priority resource={media} />
          </div>
        )}
      </div>
    </div>
  )
}
