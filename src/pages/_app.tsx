import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from "next/link"

import NavBar from "../components/NavBar"

export default function App({ Component, pageProps }: AppProps) {
  const sites = [
    {
      href: "https://google.com/",
      name: "subsite"
    }
  ]


  return <>
    <NavBar HostName='TestSite' SubSites={sites} />

    <Component {...pageProps} />
  </>
}
