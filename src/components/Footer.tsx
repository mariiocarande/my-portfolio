import React from 'react'
import dayjs from 'dayjs'

const Footer: React.FC = () => {
  return (
    <footer className="flex text-black bg-red-50 border-spacing-40">
      &#169; {dayjs().year()} Mario Carande Scarafia
    </footer>
  )
}

export default Footer
