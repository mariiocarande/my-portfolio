"use client"

import CardInfo from "@/components/CardInfo"
import Footer from "@/components/Footer"
import Menu from "@/components/Menu"
import { useState } from "react"

export interface NavItem {
  id: number
  text: string
  page: string
}

const navItems: NavItem[] = [
  { id: 1, text: 'Home', page: 'home' },
  { id: 2, text: 'About Me', page: 'about' },
  { id: 3, text: 'Projects', page: 'projects' },
  { id: 4, text: 'Contact', page: 'contact' },
]


const Home = () => {
  const [selectedItem, setSelectedItem] = useState(navItems[0])

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 h-screen">
      <main>
          <div className="flex flex-row items-center p-24">
            <Menu navItems={navItems} onChangePage={setSelectedItem} />
            <CardInfo selectedItem={selectedItem} />
          </div> 
      </main>
      <Footer/>
    </div>
  )
}

export default Home
