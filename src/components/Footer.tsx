import React from 'react'
import dayjs from 'dayjs'

const Footer: React.FC = () => (
  <footer className="absolute bottom-0 w-full">
    &#169; {dayjs().year()} Mario Carande Scarafia
  </footer>
)

export default Footer
