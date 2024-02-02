import { cn } from '@/lib/utils'

type props = {
  className?: string
}

export default function Title({ className }: props) {
  return (
    <h1
      className={cn(
        'mt-10 font-serif text-6xl font-bold tracking-tight',
        className
      )}
    >
      Interstellar
    </h1>
  )
}
