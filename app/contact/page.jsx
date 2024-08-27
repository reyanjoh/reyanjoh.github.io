"use client"

import React, { useState } from 'react'
import UnderConstuction from '../components/UnderConstuction'
import styles from './page.module.css'
import Link from 'next/link'
// import {useRouter} from 'next/router'
import { useRouter } from 'next/navigation';
import { MdEmail } from "react-icons/md";


function Page() {
    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        // e.preventDefault()
        router.push("/contact")
    }

  return (
    <main className='main'>
      <div className={styles.main}>
          <div>
            <h1 className={styles.h1}>
              Let&apos;s Work <br/> Together
            </h1>

            <Link className={styles.myemail} href={'mailto:reyanjohnnarvaja@gmail.com'}>✉<span className={styles.span}>Send Me an email</span></Link>
          </div>
          <div>
            <form className={styles.form} action="https://docs.google.com/forms/d/e/1FAIpQLSdxi1weDi_AasCb32sQ8eyAgbeB-b0_G_8hu2ujsZ-OjXzX8A/formResponse" method='post' onSubmit={handleSubmit}>
              <input type="text" name="entry.1006061251" placeholder='Your Name' id="" />
              <input type="text" name="entry.1588082634" placeholder='Your e-Mail' id="" />
              <textarea  placeholder='Your Message' name="entry.1006831356" id=""></textarea>
              
              <button type='submit'>Send the Message</button>

            </form>
          </div>
      </div>
    </main>

  )
}

export default Page