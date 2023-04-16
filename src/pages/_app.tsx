import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from "next/link"

import NavBar, { subsite } from "../components/NavBar"

export default function App({ Component, pageProps }: AppProps) {

  const sites: subsite[] = [
    {
      href: "https://google.com/",
      name: "Shop"
    },
    {
      href: "/account",
      name: "Account"
    },
    {
      href: "/aboutUs",
      name: "AboutUs?"
    },
    {
      href: "/aboutUs",
      name: "AboutUs?"
    },
    {
      href: "/aboutUs",
      name: "AboutUs?"
    }
  ]


  return <>
    <NavBar HostName='TestSite' SubSites={sites} />

    <Component {...pageProps} />
  </>
}
