'use client'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Interstellar from '../../../public/interstellar.png'

type props = {
  className?: string
}

export default function MovieImage({ className }: props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
    >
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
          className="pt-10"
        />
      </Link>
    </motion.div>
  )
}
