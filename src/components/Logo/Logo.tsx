import React from 'react'

interface Props {
  className?: string
}

export function Logo({ className }: Props) {
  return (
    <span className={['text-xl font-semibold tracking-tight text-white', className].filter(Boolean).join(' ')}>
      Aetherfield
    </span>
  )
}
