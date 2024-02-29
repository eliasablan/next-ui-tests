import { Boxes } from '@/components/ui/background-boxes'
import Link from 'next/link'

const pages = [
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

export default function Home() {
  return (
    <main className="relative mx-auto min-h-svh w-full max-w-2xl overflow-hidden bg-slate-900 p-4">
      <Boxes />
      <h1 className="relative z-20 text-4xl font-bold text-white">
        UI tests
      </h1>

      <ul className="mt-4 list-inside list-disc text-emerald-600">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              className="relative z-20 font-semibold text-red-500 hover:underline"
              href={page.href}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
