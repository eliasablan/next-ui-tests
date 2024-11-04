'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Roboto_Condensed } from 'next/font/google'

const RobotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
})

type props = {
  className?: string
}

export default function Header({ className }: props) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className={cn(
        'flex items-center justify-between',
        RobotoCondensed.className,
        className
      )}
    >
      <div className="flex flex-col leading-5">
        <h1 className="font-light">
          A Film by
          <br />
          <span className="font-medium">Christopher Nolan</span>
        </h1>
      </div>

      <p className="border-2 border-[#1b1b1d] p-2 text-lg font-bold leading-none">
        14
      </p>
    </motion.header>
  )
}
