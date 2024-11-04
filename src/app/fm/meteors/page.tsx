import type { Metadata } from 'next'

import { Meteors } from '@/components/ui/meteors'

import Header from '../_components/Header'
import Title from '../_components/Title'
import Cast from '../_components/Cast'
import MovieImage from '../_components/MovieImage'

export const metadata: Metadata = {
  title: 'Interstellar | 2014',
  description: '14th film by Christopher Nolan',
}

export default function Interstellar() {
  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[#e7e6db] p-6 text-[#1b1b1d]">
      <div className="mx-auto max-w-3xl">
        <Header />
        <Title />
        <Cast />
        <MovieImage />
      </div>
      <Meteors number={50} />
    </main>
  )
}
