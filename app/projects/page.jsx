import React from 'react'
import styles from './page.module.css'
// import Link from 'next/link'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import ViewMore from '../components/ViewMore';


export const metadata = {
  title: "Projects | a showcase of my best work throughout the years",
  description: "The world of digital design and development is constantly evolving and so has my role over the last years. I`m still learning and gaining new skills every day.",
};


function Page() {
  return (
    <main className='main'>
      <div className={styles.main}>
        <article className={styles.article}>
          <h1>Projects</h1>
          <p>
            This is a showcase of my best work building products for a variety of clients in different fields including Start up company, photography portfolios.
          </p>
          {/* auto repair shops, legal firms, pet accessories stores, health, and many more. */}
          <p>
            The world of digital design and development is constantly evolving and so has my role over the last years. I`m still learning and gaining new skills every day.
          </p>

          <ViewMore link='/about/work-experience' text='View Work Experice'/>

        </article>

        <div className={styles.projects}>
        <a target='_blank' className={styles.project} href={'https://Visitour.ph/'}>
            <div className={styles.imageContainer}> 
              <img src="./imgs/projects cover/Visitour.png" alt="Visitourph Project cover" />


            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>thewedding-gallery</h2>
                <p>
                  Visitour is a startup company that focuses on travel and local
                  tourist destinations in the Philippines
                </p>
              </div>
              <div className={styles.feat}>
                <span>
                  EJS
                </span>
                <span>
                  Node.js
                </span>
                <span>
                  express
                </span>
                <span>
                  mongodb
                </span>
              </div>
              
            </div>
          </a>

          <a target='_blank' className={styles.project} href={'https://thewedding-gallery.pages.dev/'}>
            <div className={styles.imageContainer}> 
              <img src="./imgs/projects cover/image.png" alt="" />


            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>thewedding-gallery</h2>
                <p>
                  The Wedding Gallery is made up of a variety of creatives from many professions that are passionate about impacting the future of our local photography in Bukidnon, Philippines.
                </p>
              </div>
              <div className={styles.feat}>
                <span>
                  React.js
                </span>
                <span>
                  Cloudeflare Pages
                </span>
              </div>
              
            </div>
          </a>

          {/* <a target='_blank' className={styles.project} href={'https://thewedding-gallery.pages.dev/'}>
            <div className={styles.imageContainer}> 
              <img src="./imgs/projects cover/image.png" alt="" />


            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>thewedding-gallery0 gahfds ahfda gfweag gwag</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis itaque, odit quasi quam, provident quas libero ad iure e Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis itaque, odit quasi quam, provident quas libero ad iure e Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis itaque, odit quasi quam, provident quas libero ad iure e Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ullam.
                </p>
              </div>
              <div className={styles.feat}>
                <span>
                  ohh yee
                </span>
                <span>
                  atik atik
                </span>
                <span>
                   WAHAHAHA
                </span>
                <span>
                  Next.js
                </span>
              </div>
              
            </div>
          </a>
          
          
          <a target='_blank' className={styles.project} href={'https://thewedding-gallery.pages.dev/'}>
            <div className={styles.imageContainer}> 
              <img src="./imgs/projects cover/image.png" alt="" />


            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>thewedding-gallery</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis itaque, odit quasi quam, provident quas libero ad iure e Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ullam.
                </p>
              </div>
              <div className={styles.feat}>

              </div>
              
            </div>
          </a> */}

 
          <Link className={styles.archive} href={'/projects/archives'}>
            View Full Project Archive 
          </Link>
        

        </div>
      </div>
      
    </main>
  )
}

export default Page