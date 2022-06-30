import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter()
  console.log(`>>>: About -> router`, router)

  return (
    <nav className="py-2 px-4 bg-sky-600">
      <ul className="flex ">
        <li className="mr-4 text-white">
          <Link href="/">
            <a className={router.pathname == '/' ? 'nav-menu-active' : 'nav-menu'}>Home</a>
          </Link>
        </li>
        <li className="mr-4 text-white">
          <Link href="/photos">
            <a className={router.pathname == '/photos' ? 'nav-menu-active' : 'nav-menu'}>Photos</a>
          </Link>
        </li>
        <li className="mr-4 text-white">
          <Link href="/about">
            <a className={router.pathname == '/about' ? 'nav-menu-active' : 'nav-menu'}>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
