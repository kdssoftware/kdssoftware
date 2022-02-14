import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import HomePage from '../components/home'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Contact from '../components/contact'

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  useEffect(()=>{console.log(currentIndex)},[currentIndex])
  const showPage = (index :  number) => {
    switch (index) {
      case 0:
        return <HomePage />
      case 1:
        return <Skills />
      case 2:
        return <Projects />
      case 3:
        return <Contact />
      default:
        return <>{index}</>
    }
  }
  return (
    <main className="h-screen flex items-center px-6 lg:px-32 bg-sky-900 text-white relative" >
      <Navbar currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      {
        showPage(currentIndex)
      }
    </main>
  )
}

export default Home
