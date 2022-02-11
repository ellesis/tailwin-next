import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="py-2 px-4 bg-sky-600">
      <ul className="flex ">
        <li className="mr-4 text-white">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="mr-4 text-white">
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
