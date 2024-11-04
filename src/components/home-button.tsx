import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@radix-ui/react-icons'

export default function HomeButton() {
  return (
    <Link
      className="motion-preset-slide-up-lg absolute bottom-12 right-12 z-30 flex size-12 items-center justify-center rounded-full bg-blue-600 text-red-400"
      href="/"
    >
      <HomeIcon className="size-6 stroke-2" />
    </Link>
  )
}
