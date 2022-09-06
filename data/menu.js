import { AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'

/**
 * Menus
  title: Menu-name,
  icon: react-icon component,

  href: routing address, // option
  spacing: true | false, // option - show space between menus
  submenu: true | false, // option
  submenuItems: [
    {
      title: submenu-name
      href: submenu routing address
    },...
  ] // option - submenu list
 */
export const Menus = [
  { title: 'Home', href: '/', icon: <FaHome /> },
  { title: 'Photo', href: '/photos', icon: <BsFillImageFill /> },
  { title: 'Dashboard', icon: <RiDashboardFill /> },
  { title: 'Pages', icon: <AiOutlineFileText /> },

  {
    title: 'Layouts',
    spacing: true,
    icon: <BsReverseLayoutTextSidebarReverse />,
    submenu: true,
    submenuItems: [
      { title: 'BlackSideLayout', href: '/page-black' },
      { title: 'GrayCollapseMenuLayout', href: '/page-collapse-menu' }
    ]
  },
  { title: 'Analytics', icon: <AiOutlineBarChart /> },
  { title: 'Inbox', icon: <AiOutlineMail /> },

  { title: 'Profile', icon: <BsPerson />, spacing: true },
  { title: 'Setting', icon: <AiOutlineSetting /> },
  { title: 'Logout', icon: <AiOutlineLogout /> }
]
