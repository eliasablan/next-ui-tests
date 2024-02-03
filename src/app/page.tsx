import Link from 'next/link'

const pages = [
  {
    title: 'Interstellar',
    href: 'interstellar',
  },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-4xl font-bold">UI tests</h1>
      {pages.map((page) => (
        <div key={page.href} className="block py-2">
          <Link
            className="font-semibold text-blue-800 hover:underline"
            href={page.href}
          >
            {page.title}
          </Link>
        </div>
      ))}
    </main>
  )
}
