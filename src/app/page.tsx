import { Boxes } from '@/components/ui/background-boxes'
import Link from 'next/link'

type Pages = {
  title: string
  href: string
}[]

const framerMotionPages: Pages = [
  {
    title: 'Interstellar',
    href: 'interstellar',
  },
  {
    title: 'Background Beams',
    href: 'background-beams',
  },
  {
    title: 'Meteors',
    href: 'meteors',
  },
  {
    title: 'Particles',
    href: 'particles',
  },
]

const romboTailwindPages: Pages = [
  {
    title: 'Interstellar',
    href: 'interstellar',
  },
]

export default function Home() {
  return (
    <main className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-slate-900 p-4">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]" />
      <Boxes />
      <div className="z-20 max-w-md">
        <h1 className="relative text-4xl font-bold text-white">
          UI tests
        </h1>
        <h2 className=" mt-4 text-2xl font-bold text-white">
          Framer Motion
        </h2>
        <ul className="mt-4 list-inside list-disc text-emerald-600">
          {framerMotionPages.map((page) => (
            <li key={page.href}>
              <Link
                className="relative  font-semibold text-red-500 hover:underline"
                href={`/fm/${page.href}`}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className=" mt-4 text-2xl font-bold text-white">
          Rombo Tailwind
        </h2>
        <ul className="mt-4 w-full list-inside list-disc text-emerald-600">
          {romboTailwindPages.map((page) => (
            <li key={page.href}>
              <Link
                className="relative  font-semibold text-red-500 hover:underline"
                href={`/rt/${page.href}`}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
