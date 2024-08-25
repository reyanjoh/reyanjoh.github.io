import Link from 'next/link'
import React from 'react'
import styles from './nav.module.css'

function Nav() {
  return (
    <nav className={styles.nav}>
        <div className={styles.logoDiv}><Link href="/"><span className={styles.logo}>REY<br />AN</span></Link></div>
        <div className={styles.mainNav}>

            <Link className={styles.navBtn} href={'/projects'}>PROJECTS</Link>
            <Link className={styles.navBtn} href={'/seo-works'}>SEO</Link>
            <Link className={styles.navBtn} href={'/side-hustles'}>SIDE HUSTLES</Link>
            <Link className={styles.navBtn} href={'/about'}>ABOUT</Link>
            <Link className={styles.navBtn} href={'/contact'}>CONTACT</Link>

            {/* <input className="nav-btn projects" type="button" value="PROJECTS" />
            <input className="nav-btn contact" id="contact" type="button" value="CONTACT" /> */}
        </div>
    </nav>
  )
}

export default Nav