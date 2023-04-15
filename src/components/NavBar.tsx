import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], weight: "400" })

import styles from "../styles/NavBar.module.css"

import Link from "next/link"

export interface subsite {
  name: string;
  href: string;
}

interface props {
  HostName: string
  SubSites?: subsite[]
}

export default function NavBar(props: props) {

  return (
    <div className={[styles.NavBar, roboto.className].join(" ")}>
      <div>{props.HostName}</div>
      <div className={styles.SubSites}>
        {
          props.SubSites?.map((site, i) => (
            <div key={i}>
              <Link href={site.href}>{site.name}</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
