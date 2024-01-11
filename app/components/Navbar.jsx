import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
        <Link href="/">Home page</Link>
        <Link href="/clothing">Clothing page</Link>
    </nav>
  )
}
