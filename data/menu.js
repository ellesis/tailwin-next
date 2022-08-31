import { AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'

export const Menus = [
  { title: 'Home', href: '/', icon: <FaHome /> },

  { title: 'Dashboard', href: '/' },
  { title: 'Pages', icon: <AiOutlineFileText /> },
  { title: 'Photo', href: '/photo', spacing: true, icon: <BsFillImageFill /> },
  {
    title: 'Layouts',
    icon: <BsReverseLayoutTextSidebarReverse />,
    submenu: true,
    submenuItems: [
      { title: 'BlackSideLayout', href: '/page-black' },
      { title: 'GrayCollapseMenuLayout', href: '/page-collapse-menu' }
    ]
  },
  { title: 'Analytics', icon: <AiOutlineBarChart /> },
  { title: 'Inbox', icon: <AiOutlineMail /> },
  { title: 'Profile', spacing: true, icon: <BsPerson /> },
  { title: 'Setting', icon: <AiOutlineSetting /> },
  { title: 'Logout', icon: <AiOutlineLogout /> }
]
