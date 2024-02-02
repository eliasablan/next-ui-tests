import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type props = {
  className?: string
}

export default function MovieImage({ className }: props) {
  return (
    <Link
      className={cn(
        'font-semibold text-blue-800 hover:underline',
        className
      )}
      href="https://pin.it/1dRfwsRLM"
      target="_blank"
    >
      <Image
        src="/interstellar.png"
        alt="Interstellar"
        width={672}
        height={300}
        className="py-10"
      />
    </Link>
  )
}
