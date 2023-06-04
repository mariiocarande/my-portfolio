import { NavItem } from '@/app/page'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface Props {
  navItem: NavItem
  onChangePage: Dispatch<SetStateAction<NavItem>>
}

const NavButton: React.FC<Props> = ({ navItem, onChangePage }) => {
  return (
    <div
      onClick={() => onChangePage(navItem)}
      className="flex justify-center w-24 rounded-md p-2 border-2 border-black bg-cyan-400 hover:bg-cyan-600 cursor-pointer hover:scale-110 hover:translate-x-2 transition ease-in-out delay-150"
    >
      {navItem.text}
    </div>
  )
}

export default NavButton
