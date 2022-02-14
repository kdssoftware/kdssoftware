import { NextPage } from "next";

const Home:NextPage = () => {
return (
    <>
        <section className="w-full md:w-9/12 xl:w-8/12">
        <span className="font-bold font-special text-lg uppercase tracking-widest">My portfolio</span>
        <h1 className="antialiased uppercase text-6xl lg:text-8xl font-bold font-special text-lime-500">
        snakehead007
        </h1>
        <p className="font-bold uppercase text-base mb-5">
        Based in <span className='antialiased uppercase text-lg text-sky-200'>belgium</span>
        </p>
        <p className='font-thin'>
        Creating software since 2015.<br/>
        Since 2019 I started creating full stack web application.<br/>
        Learning <span className='font-medium  text-lg text-sky-200'>new technologies</span> on the way.
        </p>
        </section>
        <footer className="absolute right-0 bottom-0 p-6 lg:p-32 text-lg">
        <p className="font-thin mb-1">Author</p>
        <p>
            <span className='font-bold font-special text-2xl capitalize text-lime-500'>
            Karel De Smet
            </span>
            <span className='font-thin'>
            &nbsp;-&nbsp;
            </span>
            <span className='font-medium text-xl'>
            Full Stack Developer
            </span>
            </p>
        </footer>
    </>
)

}

export default Home