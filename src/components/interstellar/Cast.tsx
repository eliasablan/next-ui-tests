'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type props = {
  className?: string
}

export default function Cast({ className }: props) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
      className={cn(
        'mt-14 flex justify-end gap-x-8 text-xs font-semibold tracking-tight',
        className
      )}
    >
      <div className="flex flex-col justify-between gap-y-4 sm:gap-y-1">
        <p>Matthew McConaughey</p>
        <p>Anne Hathaway</p>
        <p>Jessica Chastain</p>
      </div>
      <div className="flex flex-col justify-between gap-y-4 sm:gap-y-1">
        <p>Mackenzie Foy</p>
        <p>Bill Irwin</p>
        <p>Michael Caine</p>
      </div>
      <div className="flex flex-col justify-between gap-y-4 sm:gap-y-1">
        <p>John Lithgow</p>
        <p>David Oyellowo</p>
        <p>Ellen Burstyn</p>
      </div>
    </motion.div>
  )
}
