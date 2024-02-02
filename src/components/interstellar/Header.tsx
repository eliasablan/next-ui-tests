import { cn } from '@/lib/utils'

type props = {
  className?: string
}

export default function Header({ className }: props) {
  return (
    <header className={cn('flex items-center justify-between', className)}>
      <div className="flex flex-col leading-5 tracking-tight">
        <h1>A Film by</h1>
        <p className="font-bold">Christopher Nolan</p>
      </div>

      <p className="border-2 border-[#1b1b1d] p-2 font-bold leading-none">
        14
      </p>
    </header>
  )
}
