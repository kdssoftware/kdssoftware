import { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  let [delayOff, setDelayOff] = useState(false);
  setInterval(() => {
    setDelayOff(true);
  }, 150);
  return (
    <>
      <section className="w-full h-full flex justify-center flex-col pb-20 text-dracula-fire-light">
        <span className="text-lg font-semibold tracking-widest uppercase ">
          My portfolio
        </span>
        <h1
        style={{
          width:"fit-content"
        }}
          className={`antialiased font-sans uppercase text-7xl lg:text-8xl font-bold  ${
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
        <p className="">
          Creating software since 2016.
          <br />
          Creating Full-stack websites since 2019.
          <br />
          Learning{' '}
          <span className="text-lg font-bold text-dracula-green">
            new technologies
          </span>{' '}
          on the way.
        </p>
      </section>
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
    </>
  );
};

export default Home;
