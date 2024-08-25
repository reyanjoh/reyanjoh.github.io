// import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'


export const metadata = {
    title: "About | Reyan John Narvaja",
    description: "a developer and SEO specialist based in Northern Mindanao, Philippines.  If you`re looking for someone to build or optimize your website. just reach me out",
  };

function page() {
  return (
    <main className='main'>
        <div className={styles.main}>
            <article className={styles.left}>
                <h1>
                    Hi! My name is Reyan
                </h1>
                <p>
                     I am a developer and SEO specialist based in Northern Mindanao, Philippines. I have developed and optimized websites for different clients ranging from auto repair shops, legal firms, pet accessories stores, health, and many more.
                </p>
                    <br />
                <p>
                    If you`re looking for someone to build or optimize your website. You may visit <Link href={'/projects'}>my projects</Link> and  <Link href={'/side-hustles'}>side hustles page</Link> to see if I`m suited for your needs.
                </p>
                    <br />
                <p>
                    feel free to contact me through <Link href={'/contact'}>my contact information page</Link>, or you can always just fill out the form and we`re good to go! 
                </p>


            </article>
            <div className={styles.right}>
                <img className={styles.img} src={'./imgs/face.webp'} />
            </div>
        </div>
    </main>
  )
}

export default page