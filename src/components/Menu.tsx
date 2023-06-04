import React, { Dispatch, SetStateAction } from 'react'
import NavButton from './NavButton'
import { NavItem } from '@/app/page'

interface Props {
  navItems: NavItem[]
  onChangePage: Dispatch<SetStateAction<NavItem>>
}

const Menu: React.FC<Props> = ({ navItems, onChangePage }) => (
  <div className="flex flex-col text-black bg-cyan-100 rounded-md border-2 border-black justify-between p-4 items-center drop-shadow-2xl m-4">
    <div className="flex flex-col gap-4 justify-start w-full">
      {navItems.map(navItem => (
        <NavButton
          onChangePage={onChangePage}
          key={navItem.id}
          navItem={navItem}
        />
      ))}
    </div>
  </div>
)

export default Menu

