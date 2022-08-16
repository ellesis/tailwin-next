import React from 'react'

import Nav from '../components/Nav'
import HeadInfo from '../components/HeadInfo'

const NavLayout = ({ children }) => {
  return (
    <>
      <HeadInfo title="Lisa's Tailwindcss-Next" />
      <Nav />
      <div className="flex flex-col justify-between">{children}</div>
    </>
  )
}

export default NavLayout
