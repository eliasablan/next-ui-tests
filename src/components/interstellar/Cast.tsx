import { cn } from '@/lib/utils'

type props = {
  className?: string
}

export default function Cast({ className }: props) {
  return (
    <div
      className={cn(
        'mt-14 flex justify-end gap-x-8 text-xs font-semibold tracking-tight',
        className
      )}
    >
      <div>
        <p>Matthew McConaughey</p>
        <p>Anne Hathaway</p>
        <p>Jessica Chastain</p>
      </div>
      <div>
        <p>Mackenzie Foy</p>
        <p>Bill Irwin</p>
        <p>Michael Caine</p>
      </div>
      <div>
        <p>John Lithgow</p>
        <p>David Oyellowo</p>
        <p>Ellen Burstyn</p>
      </div>
    </div>
  )
}
