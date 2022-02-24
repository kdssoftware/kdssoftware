import {Dispatch, SetStateAction, useState} from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { title } from 'process'
import { navItems } from '../public/data'

interface Props {
  activeHref: string;
  }

const Navbar : NextPage<Props> = (props) =>{
    const { activeHref } = props
    
    const [hoveringNavNumber,setHoveringNavNumber] = useState<number>()
    const animateNavBorder = (nav :number) => {
        setHoveringNavNumber(nav)
    }
    let currentIndex = navItems.findIndex(item => item.href === activeHref) 
    if(currentIndex === -1) currentIndex = 0
    return (
    <header className="w-full absolute left-0 top-0 p-6 md:p-12 lg:p-16">
        <div className="flex justify-center md:justify-between">
        <div>
        <p className='mb-3 text-lg uppercase font-medium font-special hidden md:block'>{navItems[currentIndex].slogan}</p>
        </div>
        <div>
        <ul className="flex">
        {
            navItems.map((item,index) => (
            <li key={index} className={"ml-12 md:ml-24 "+(hoveringNavNumber===index || currentIndex === index?"text-amber-200":"")} >
                <Link href={item.href}>
                  <a className='cursor-pointer' onMouseOver={()=> {animateNavBorder(index)}} onMouseLeave={()=> {animateNavBorder(-1)}}>
                      <div className="flex items-center justify-end">
                      <div className={"w-10 border-b border-solid border-white ease-in-out  transition  "+(currentIndex===index?"border-4 border-amber-500 border-10 rounded-lg antialiased ":hoveringNavNumber===index?"border-4 border-amber-500 border-10 rounded-lg animate-pulse antialiased":"")}></div>
                          <h1 className="ml-3 text-3xl font-bold ">{index+1}</h1>
                      </div>
                      <div className="text-right">{item.title}</div>
                  </a>
                </Link>
            </li>
            ))
        }
        </ul>
    </div>
    </div>
    
    </header>
    )
}

export default Navbar