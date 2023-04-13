import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Staatliches } from "next/font/google"
import Head from 'next/head'

const staatliches = Staatliches({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-staat"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${staatliches.variable} font-staat bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    
    </>
  

    )
  
}
