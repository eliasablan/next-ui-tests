'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
})

type props = {
  className?: string
}

export default function Title({ className }: props) {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
      className={cn(
        'mt-10 font-serif font-extrabold tracking-tighter',
        'xs:text-7xl text-6xl sm:text-8xl',
        dmSans.className,
        className
      )}
    >
      Interstellar
    </motion.h1>
  )
}
