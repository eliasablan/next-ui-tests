'use client'

import { cn } from '@/lib/utils'

type props = {
  className?: string
}

export default function Cast({ className }: props) {
  return (
    <div
      className={cn(
        'mt-14 flex justify-end gap-x-4 text-xs font-semibold tracking-tight sm:gap-x-8',
        className
      )}
    >
      <div className="flex flex-col justify-between gap-y-2 sm:gap-y-1">
        <p>Matthew McConaughey</p>
        <p>Anne Hathaway</p>
        <p>Jessica Chastain</p>
      </div>
      <div className="flex flex-col justify-between gap-y-2 sm:gap-y-1">
        <p>Mackenzie Foy</p>
        <p>Bill Irwin</p>
        <p>Michael Caine</p>
      </div>
      <div className="flex flex-col justify-between gap-y-2 sm:gap-y-1">
        <p>John Lithgow</p>
        <p>David Oyellowo</p>
        <p>Ellen Burstyn</p>
      </div>
    </div>
  )
}
