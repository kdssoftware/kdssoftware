import { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  let [delayOff, setDelayOff] = useState(false);
  setInterval(() => {
    setDelayOff(true);
  }, 100);
  return (
    <>
      <section className="w-full h-full flex justify-center flex-col md:w-9/12 xl:w-8/12">
        <span className="text-lg font-bold tracking-widest uppercase font-special">
          My portfolio
        </span>
        <h1
          className={`antialiased uppercase text-6xl lg:text-8xl font-bold font-special ${
            delayOff ? 'text-dracula-green' : 'text-yellow-50'
          } transition-colors duration-1000`}
        >
          KDS SOFTWARE
        </h1>
        <p className="mb-5 font-bold uppercase">
          Software Engineer
          <span className="text-lg text-dracula-cyan">
            &nbsp;
            <a
              href="https://www.guardsquare.com/"
              rel="noopener noreferrer"
            >
              @Guardsquare
            </a>
          </span>
        </p>
        <p className="font-thin">
          Creating software since 2015.
          <br />
          Creating Full-stack websites since 2019.
          <br />
          Learning{' '}
          <span className="text-lg font-medium text-dracula-green">
            new technologies
          </span>{' '}
          on the way.
        </p>
      </section>
      <footer className="fixed bottom-0 right-0 p-6 text-lg lg:p-32">
        <p className="mb-1 font-thin">Author</p>
        <p>
          <span className="text-2xl font-bold text-dracula-green font-special">
            <a href="//karel.be">Karel De Smet</a>
          </span>
        </p>
      </footer>
    </>
  );
};

export default Home;
