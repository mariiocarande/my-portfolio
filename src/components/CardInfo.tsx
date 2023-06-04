import { NavItem } from '@/app/page'
import React from 'react'

interface Props {
  selectedItem: NavItem
}

const CardInfo: React.FC<Props> = ({ selectedItem }) => {
  return (
    <div className="rounded-md gap-4 bg-gradient-to-r from-slate-300 to-slate-500 p-10 w-full h-60">
      <h1 className="flex justify-center text-black text-2xl">
        {selectedItem.text}
      </h1>
      {selectedItem.page === 'about' && (
        <p className="text-black">
          {`I'm Mario Carande Scarafía I'm a front-end developer actually working with ReactJS. I like learning about new technologies and working with teams that know how to follow good practices.`}
        </p>
      )}
    </div>
  )
}

export default CardInfo

