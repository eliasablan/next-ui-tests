'use client'
import { motion } from 'framer-motion'
import Cast from '@/components/interstellar/Cast'
import Header from '@/components/interstellar/Header'
import Title from '@/components/interstellar/Title'
import MovieImage from '@/components/interstellar/MovieImage'

export default function Interstellar() {
  return (
    <main className="relative min-h-svh bg-[#e7e6db] pt-10 text-[#1b1b1d]">
      <div className="mx-auto max-w-3xl px-2 pb-10">
        {/* Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Header />
        </motion.div>

        {/* Movie Name */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.25 } }}
        >
          <Title />
        </motion.div>

        {/* Cast */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.25 } }}
        >
          <Cast />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <MovieImage />
        </motion.div>
      </div>
    </main>
  )
}
