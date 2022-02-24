import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
    let [delayOff,setDelayOff] = useState(false)
    setInterval(()=>{
        setDelayOff(true)
    },100)
    return (
        <>
            <section className="w-full md:w-9/12 xl:w-8/12">
                <span className="font-bold font-special text-lg uppercase tracking-widest">My portfolio</span>
                <h1 className={`antialiased uppercase text-6xl lg:text-8xl font-bold font-special ${delayOff?"text-amber-500":"text-amber-50"} transition-colors duration-1000`}>
                    KDS SOFTWARE
                </h1>
                <p className="font-bold uppercase mb-5">
                    Full-stack engineer for <span className='text-lg text-sky-400'>
                        <a href='https://www.guardsquare.com/' rel='noopener noreferrer'>Guardsquare</a>
                    </span>
                </p>
                <p className='font-thin'>
                    Creating software since 2015.<br />
                    Creating Full-stack websites since 2019.<br />
                    Learning <span className='font-medium  text-lg text-amber-400'>new technologies</span> on the way.
                </p>
            </section>
            <footer className="absolute right-0 bottom-0 p-6 lg:p-32 text-lg">
                <p className="font-thin mb-1">Author</p>
                <p>
                    <span className='font-bold font-special text-2xl capitalize text-amber-400'>
                        Karel De Smet
                    </span>
                    <span className='font-thin'>
                        &nbsp;-&nbsp;
                    </span>
                    <span className='font-medium text-xl'>
                        Full-Stack Engineer
                    </span>
                </p>
            </footer>
        </>
    )

}

export default Home