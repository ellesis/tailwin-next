import React from 'react'

import Nav from './Nav'
import HeadInfo from './HeadInfo'

const Layout = ({children}) => {
  return (
    <>
      <HeadInfo title="Lisa's Next & Tailwindcss" />
      <Nav />
      <div>{children}</div>
    </>
  )
}

export default Layout
