import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const activeHref = router.pathname;

  //useEffect onkeyup to change activeHref
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case '1':
          router.push('/');
          break;
        case '2':
          router.push('/skills');
          break;
        case '3':
          router.push('/projects');
          break;
        case '4':
          router.push('/contact');
          break;
      }
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [router]);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Gudea&family=Rajdhani:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Monda:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
        <meta
          content="text/html; charset=utf-8"
          httpEquiv="Content-Type"
        ></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width,height=device-height, initial-scale=1, shrink-to-fit=yes"
        ></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className='-z-20 w-screen h-screen bg-dracula-extra fixed top-0 bg-cover ' style={{ backgroundImage: `url('/bg1.svg')` }} ></div>
      <main
        
        className="flex h-screen relative top-0 w-full font-fire items-center text-dracula-foreground"
      >
        <Navbar activeHref={activeHref} />
        <div className="absolute w-full top-28 bottom-0 px-5 md:px-6 lg:px-12 ">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
