import type { Metadata } from 'next'
import Header from '@/components/interstellar/Header'
import Title from '@/components/interstellar/Title'
import Cast from '@/components/interstellar/Cast'
import MovieImage from '@/components/interstellar/MovieImage'
import { Meteors } from '@/components/ui/meteors'

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
