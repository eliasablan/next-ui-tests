import Image from 'next/image'

export default function Interstellar() {
  return (
    <main className="relative min-h-svh bg-[#e7e6db] pt-10 text-[#1b1b1d]">
      <div className="mx-auto max-w-2xl pb-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex flex-col leading-5 tracking-tight">
            <h1>A Film by</h1>
            <p className="font-bold">Christopher Nolan</p>
          </div>

          <p className="border-2 border-[#1b1b1d] p-2 font-bold leading-none">
            14
          </p>
        </header>

        {/* Movie Name */}
        <h1 className="mt-10 font-serif text-6xl font-bold tracking-tight">
          Interstellar
        </h1>

        {/* Cast */}
        <div className="mt-14 flex justify-end gap-x-8 text-xs font-semibold tracking-tight">
          <div>
            <p>Matthew McConaughey</p>
            <p>Anne Hathaway</p>
            <p>Jessica Chastain</p>
          </div>
          <div>
            <p>Mackenzie Foy</p>
            <p>Bill Irwin</p>
            <p>Michael Caine</p>
          </div>
          <div>
            <p>John Lithgow</p>
            <p>David Oyellowo</p>
            <p>Ellen Burstyn</p>
          </div>
        </div>

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
