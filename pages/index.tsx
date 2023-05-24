import { NextPage } from 'next';
import { useState } from 'react';
import Logo from '../components/Logo';
let once = false
const Home: NextPage = () => {
  let [delayOff, setDelayOff] = useState(once);
  setInterval(() => {
    once = true
    setDelayOff(true);
  }, 1000);
  return (
    <>
      <section className={
        `w-full h-full flex justify-center flex-col pb-20 text-dracula-fire-light delay-100 ease-in-out transition-opacity
         fixed
        ${
          delayOff ? 'opacity-100' 
          : 'opacity-0'
        }`
         
      } 
      >
        <span className="text-lg font-semibold tracking-widest uppercase ">
          My portfolio
        </span>
        <h1
          className={`antialiased font-sans uppercase text-7xl lg:text-8xl font-bold w-fit ${
            delayOff
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-dracula-fire-light via-dracula-fire-middle to-dracula-fire-dark'
              : 'text-dracula-foreground'
          } transition-colors duration-1000`}
        >
          KDS SOFTWARE
        </h1>
        <p className="mb-5 uppercase">
          Software Engineer
          <span className="text-lg  text-dracula-green-light">
            &nbsp;@
            <a
              className="font-monda "
              href="https://www.guardsquare.com/"
              rel="noopener noreferrer"
            >
              Guardsquare
            </a>
          </span>
        </p>
        <p>
          Creating software since 2016.
          <br />
          Creating Full-stack websites since 2019.
          <br />
          Learning
          <span className="text-lg font-bold text-dracula-green mx-2">
            new technologies
          </span>
          on the way.
        </p> 
        <p className="mt-5">
           <a href="https://discord.gg/JwQtNdN5" className='group
            transition-all duration-500 ease-in-out
           '> 
            <img className="inline-block h-12 w-12 p-2 bg-dracula-green rounded-full
            group-hover:bg-gradient-to-br group-hover:from-dracula-fire-light group-hover:via-dracula-fire-middle group-hover:to-dracula-fire-dark 
            transition-all duration-500 ease-in-out
            " src="/icon/discord.svg" alt="discord" />
            <span className="text-lg font-bold text-dracula-green mx-2">
                For questions or conversation, join my discord server.
            </span>
            </a>
        </p>

        <footer className="fixed bottom-0 right-0 p-6 text-lg lg:p-16">
        <p className="mb-1 font-thin">Author</p>
        <p>
          <span className="text-2xl font-bold text-dracula-green-dark font-">
            <a href="https://kdssoftware.com/contact">
              Karel De Smet
            </a>
          </span>
        </p>
      </footer>
      </section>
      <div className={`fixed top-1/2 left-1/2 delay-100 transition-all ${
        delayOff && "opacity-0"
      }`} >
        <Logo />
      </div>
     
    </>
  );
};

export default Home;
