import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/navbar'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const activeHref = router.pathname;
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"></link>
      <link href="https://fonts.googleapis.com/css2?family=Gudea&family=Rajdhani:wght@300&display=swap" rel="stylesheet"></link>
      {/* logo */}
      <link rel="icon" href="/logo-sm2.svg" />
    </Head>
    <main className="h-screen flex items-center px-6 lg:px-32 bg-sky-900 text-white relative" >
      <Navbar activeHref={activeHref}/>
      <Component {...pageProps} />
    </main>
  </>
}

export default MyApp
