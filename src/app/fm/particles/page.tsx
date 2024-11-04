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
    <main className="relative min-h-svh overflow-hidden bg-[#151513] p-6 text-[#e7e6db]">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={600}
        className="absolute left-0 top-0 mx-auto h-full w-full"
        particleColor="#e7e6db"
      />
      <div className="mx-auto max-w-3xl">
        <Header className="text-[#e7e6db]" />
        <Title className="text-[#e7e6db]" />
        <Cast className="text-[#e7e6db]" />
        <MovieImage className="relative text-[#e7e6db]" />
      </div>
    </main>
  )
}
