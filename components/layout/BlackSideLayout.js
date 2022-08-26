import React from 'react'
import BlackSideNav from '../nav-side/BlackSideNav'
function BlackSideLayout({ children }) {
  return (
    <div className="flex">
      <BlackSideNav />
      <div className="p-7">{children}</div>
    </div>
  )
}

export default BlackSideLayout
