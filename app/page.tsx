import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/a" className="text-9xl">
        A
      </Link>
      <Link href="/a/b" className="text-9xl">
        B
      </Link>
    </>
  )
}
