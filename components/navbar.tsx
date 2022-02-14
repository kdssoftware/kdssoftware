import {Dispatch, SetStateAction, useState} from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

interface Props {
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
  }

const Navbar : NextPage<Props> = (props) =>{

    const { currentIndex } = props
    const navItems = [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Skills',
          href: '/skills',
        },
        {
          title: 'Projects',
          href: '/projects',
        },
        {
          title: 'Contact',
          href: '/contact',
        }
      ]
    const [hoveringNavNumber,setHoveringNavNumber] = useState<number>()
    const animateNavBorder = (nav :number) => {
        setHoveringNavNumber(nav)
      }
    const changeContent = (nav :number) => {
        if(nav!==currentIndex){
            console.log(nav)
            props.setCurrentIndex(nav)
        }
    }
    return (
    <header className="w-full absolute left-0 top-0 p-6 lg:p-32">
        <div className="flex justify-between">
        <div>
        <p className='mb-3 text-lg uppercase font-medium font-special'>From Dataqueries to webdesign...</p>
        </div>
        <div>
        <ul className="flex">
        {
            navItems.map((item,index) => (
            <li key={index} className={"ml-24 "+(hoveringNavNumber===index || currentIndex === index?"text-lime-500":"")} >
                <div className='cursor-pointer' onClick={()=>{changeContent(index)}} onMouseOver={()=> {animateNavBorder(index)}} onMouseLeave={()=> {animateNavBorder(-1)}}>
                    <div className="flex items-center justify-end">
                    <div className={"w-10 border-b border-solid border-white ease-in-out  transition  "+(currentIndex===index?"border-4 border-lime-500 border-10 rounded-lg antialiased ":hoveringNavNumber===index?"border-4 border-lime-500 border-10 rounded-lg animate-pulse antialiased":"")}></div>
                        <h1 className="ml-3 text-3xl font-bold">{index+1}</h1>
                    </div>
                    <div className="text-right">{item.title}</div>
                </div>
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