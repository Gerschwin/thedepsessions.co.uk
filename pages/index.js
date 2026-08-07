import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding: '2rem', fontFamily: 'Inter, system-ui, sans-serif'}}>
      <h1>The Dep Sessions — Staging</h1>
      <p>This branch contains a Next.js scaffold while you continue to maintain the static site in main.</p>
      <ul>
        <li><a href="/index.html">Original static site (public/index.html)</a></li>
        <li><Link href="/auth">Auth demo (Supabase)</Link></li>
        <li><Link href="/dashboard">Protected dashboard</Link></li>
      </ul>
    </main>
  )
}
