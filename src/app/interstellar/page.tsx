import Cast from '@/components/interstellar/Cast'
import Header from '@/components/interstellar/Header'
import Title from '@/components/interstellar/Title'
import Image from 'next/image'

export default function Interstellar() {
  return (
    <main className="relative min-h-svh bg-[#e7e6db] pt-10 text-[#1b1b1d]">
      <div className="mx-auto max-w-2xl pb-10">
        {/* Header */}
        <Header />

        {/* Movie Name */}
        <Title />

        {/* Cast */}
        <Cast />

        {/* Image */}
        <Image
          src="/interstellar.png"
          alt="Interstellar"
          width={672}
          height={300}
          className="py-10"
        />
      </div>
    </main>
  )
}
