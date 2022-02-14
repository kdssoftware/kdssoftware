import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossorigin"></link>
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
