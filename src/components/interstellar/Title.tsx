type props = {
  className?: string
}

export default function Title({ className }: props) {
  return (
    <h1 className="mt-10 font-serif text-6xl font-bold tracking-tight">
      Interstellar
    </h1>
  )
}
