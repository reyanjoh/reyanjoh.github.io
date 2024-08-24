import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa";
import styles from './footer.module.css'
import Link from 'next/link';


function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.socialsContainer}>
            <Link target="_blank" className={styles.socials} href="https://www.linkedin.com/in/reyan-john-narvaja-614289203/"><FaLinkedin className={styles.faBrands} size={25} /></Link>
            <Link target="_blank" className={styles.socials} href="https://github.com/reyanjoh"><FaGithub className={styles.faBrands} size={25} /></Link>
            <Link target="_blank" className={styles.socials} href="/"><FaFacebook className={styles.faBrands} size={25} /></Link>
        </div>
    </footer>
  )
}

export default Footer