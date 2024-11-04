'use client'

import { DM_Sans } from 'next/font/google'

import { cn } from '@/lib/utils'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

type props = {
  className?: string
}

export default function Title({ className }: props) {
  return (
    <h1
      className={cn(
        'mt-10 font-serif font-extrabold tracking-tighter',
        'text-5xl xs:text-7xl sm:text-8xl',
        dmSans.className,
        className
      )}
    >
      Interstellar
    </h1>
  )
}
