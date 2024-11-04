import type { Metadata } from 'next'

import { SparklesCore } from '@/components/ui/sparkles'

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
    <main className="relative min-h-svh overflow-hidden bg-[#e7e6db] p-6 text-[#1b1b1d]">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={600}
        className="absolute left-0 top-0 mx-auto h-full w-full"
        particleColor="#000"
      />
      <div className="mx-auto max-w-3xl">
        <Header />
        <Title />
        <Cast />
        <MovieImage className="relative" />
      </div>
    </main>
  )
}
