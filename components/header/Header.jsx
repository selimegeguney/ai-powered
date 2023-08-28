import React from "react"
import styles from "./style.module.scss"
import Link from "next/link"
const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Logo</span>
      <nav className={styles.navBar}>
        <Link href="/">Home</Link>
        <Link href="/">Image</Link>
        <Link href="/">Text</Link>
        <Link href="/">Profile</Link>
      </nav>
    </header>
  )
}

export default Header
