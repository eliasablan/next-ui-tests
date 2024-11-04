import type { Metadata } from 'next'

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
    <main className="relative min-h-svh bg-[#e7e6db] p-6 text-[#1b1b1d]">
      <div className="mx-auto max-w-3xl">
        <Header className="motion-preset-slide-right-lg" />
        <Title className="motion-preset-slide-right-lg" />
        <Cast className="motion-preset-slide-right-lg" />
        <MovieImage imageClassName="motion-preset-slide-right-lg" />
      </div>
    </main>
  )
}
