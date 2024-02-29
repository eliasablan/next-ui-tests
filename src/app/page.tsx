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
    href: 'Particles',
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-4xl font-bold">UI tests</h1>

      <ul className="mt-4 list-inside list-disc">
        {pages.map((page) => (
          <li key={page.href}>
            <Link
              className="font-semibold text-blue-800 hover:underline"
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
