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
  }, []);

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
        <link rel="icon" href="/kds.logo.svg" />
      </Head>
      <main className="flex h-screen absolute top-0 w-full items-center   bg-sky-900 text-lime-50">
        <Navbar activeHref={activeHref} />
        <div className="relative w-full mx-5 md:mx-6 lg:mx-12">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
