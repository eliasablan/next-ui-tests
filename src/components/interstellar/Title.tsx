import { cn } from '@/lib/utils'
import { DM_Sans } from 'next/font/google'

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
        'mt-10 font-serif text-6xl font-extrabold tracking-tighter md:text-8xl',
        dmSans.className,
        className
      )}
    >
      Interstellar
    </h1>
  )
}
