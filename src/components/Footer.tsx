import React from 'react'
import dayjs from 'dayjs'

const Footer: React.FC = () => {
  return (
    <footer className="text-blackp-4 absolute bottom-0 w-full">
      &#169; {dayjs().year()} Mario Carande Scarafia
    </footer>
  )
}

export default Footer
