import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-between p-24">
        {children}
      </div>
      {/* <Footer/> */}
    </main>
  )
};

export default Layout;

