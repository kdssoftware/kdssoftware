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
                <span className="text-lg font-bold tracking-widest uppercase font-special">My portfolio</span>
                <h1 className={`antialiased uppercase text-6xl lg:text-8xl font-bold font-special ${delayOff?"text-yellow-500":"text-yellow-50"} transition-colors duration-1000`}>
                    KDS SOFTWARE
                </h1>
                <p className="mb-5 font-bold uppercase">
                    {/* Software Engineer 
                    <span className='text-lg text-sky-400'>
                        <a href='https://www.guardsquare.com/' rel='noopener noreferrer'>@Guardsquare</a>
                    </span> */}
                    Full-stack developer
                    <span className='text-lg text-sky-400'>
                        &nbsp;<a href='https://ilt.kuleuven.be/' rel='noopener noreferrer'>@kuleuven (ILT)</a>
                    </span>
                </p>
                <p className='font-thin'>
                    Creating software since 2015.<br />
                    Creating Full-stack websites since 2019.<br />
                    Learning <span className='text-lg font-medium text-yellow-400'>new technologies</span> on the way.
                </p>
            </section>
            <footer className="absolute bottom-0 right-0 p-6 text-lg lg:p-32">
                <p className="mb-1 font-thin">Author</p>
                <p>
                    <span className='text-2xl font-bold text-yellow-500 font-special'>
                        <a href="//karel.be">Karel De Smet</a>
                    </span>
                    <span className='font-thin text-yellow-200'>
                        &nbsp;aka&nbsp;
                    </span>
                    <span className='text-2xl font-bold text-yellow-500 font-special'>
                        <a href="//snakehead007.com">snakehead007</a>
                    </span>
                </p>
            </footer>
        </>
    )

}

export default Home