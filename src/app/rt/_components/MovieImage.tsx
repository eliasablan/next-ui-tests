'use client'

import Link from 'next/link'
import Image from 'next/image'
import Interstellar from '/public/interstellar.png'

import { cn } from '@/lib/utils'

type props = {
  className?: string
  imageClassName?: string
}

export default function MovieImage({ className, imageClassName }: props) {
  return (
    <div>
      <Link
        className={cn(
          'font-semibold text-blue-800 hover:underline',
          className
        )}
        href="https://pin.it/1dRfwsRLM"
        target="_blank"
      >
        <Image
          src={Interstellar}
          alt="Interstellar"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className={cn('pt-10', imageClassName)}
        />
      </Link>
    </div>
  )
}
