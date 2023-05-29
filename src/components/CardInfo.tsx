import Image from 'next/image'
import React from 'react'

interface Props {
  text: string
}

const CardInfo: React.FC<Props> = ({ text }) => (
  <section>
    <div className="flex flex-col justify-center gap-4 rounded-2xl bg-cyan-300 p-10">
      <h1 className="flex justify-center text-black text-2xl">
        {text}
      </h1>
      <div className="flex justify-center">
        <Image
          src="/scaloni.png"
          width={300}
          height={300}
          alt="This is an image of me"
          className="rounded-full shadow-2xl"
        />
      </div>
      <p className="text-black">
        {`I'm Mario Carande Scarafía I'm a front-end developer actually working with ReactJS. I like learning about new technologies and working with teams that know how to follow good practices.`}
      </p>
    </div>
  </section>  
)

export default CardInfo

