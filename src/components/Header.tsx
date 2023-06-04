import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="flex text-black bg-red-50 border-spacing-40 justify-between">
      <div className="font-bold">
        Welcome!
      </div>
      <div className="flex gap-4">
        <div>
          Home
        </div>
        <div>
          About
        </div>
        <div>
          Projects
        </div>
        <div>
          Contact
        </div>
      </div>
    </div>
  )
}

export default Header

