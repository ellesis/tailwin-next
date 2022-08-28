import React, { useState } from 'react'
import { BsArrowLeftShort, BsSearch } from 'react-icons/bs'
import { AiFillEnvironment } from 'react-icons/ai'

function BlackSideNav() {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard' },
    { title: 'Pages' },
    { title: 'Media', spacing: true },
    {
      title: 'Projects',
      submenu: true,
      submenuItems: [{ title: 'submenu 1' }, { title: 'submenu 2' }, { title: 'submenu 3' }]
    },
    { title: 'Analytics' },
    { title: 'Inbox' },
    { title: 'Profile', spacing: true },
    { title: 'Setting' },
    { title: 'Logout' }
  ]

  return (
    <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
      {/* arrow */}
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute top-9 -right-3 border border-dark-purple cursor-pointer
        ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
      />
      {/* top */}
      <div className="inline-flex">
        <AiFillEnvironment
          className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2
          ${open && 'rotate-[360deg]'} duration-500`}
        />
        <h1 className={`text-white origin-left font-medium text-2xl ${!open && 'scale-0'}`}>Tailwind</h1>
      </div>
      {/* search */}
      <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2`}>
        <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`} />
        <input
          type={'search'}
          placeholder="Search"
          className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && 'hidden'}`}
        />
      </div>

      {/* menu */}
      <ul className={`pt-2`}>
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2
          hover:bg-light-white rounded-md mt-2`}
          >
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlackSideNav
