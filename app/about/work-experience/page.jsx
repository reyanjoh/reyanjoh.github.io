import React from 'react'
import styles from './page.module.css'
// import Link from 'next/link'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import JobDes from './component/JobDes';



export const metadata = {
  title: "Projects | a showcase of my best work throughout the years",
  description: "The world of digital design and development is constantly evolving and so has my role over the last years. I`m still learning and gaining new skills every day.",
};


function Page() {
  return (
    <main className='main'>
      <div className={styles.main}>
        <article className={styles.article}>
          <h1>Work Experience</h1>
          <p>
            Here&apos;s my fun and adventurous journey in the past few years 
          </p>

          <p>
            <span>&quot;Jack of all trades&quot; </span> 
            a lot of people view it as a bad thing because of its common follow-up 
            <span> &quot;master of none&quot;</span>, which makes people think that someone may have many skills but lacks deep experties.

             
          </p>
          <p>
            but people often forget what the full quote or meaning of it really is 
             <span>&quot;Jack of all trades master of none, though oftentimes better than master of one.&quot; </span>
            with these diverse work experience and skill sets, it allows me take on various projects and adapt to different roles, making me versatile and capable of handling complex, multifaceted tasks.
          </p>

        </article>

        <div className={styles.projects}>

          <JobDes key={1} date='Oct 2023 - Present' 
            des='Videographer, Photographer, & Live Streaming
                Production Technician' 
            role='Freelacer' 
            epx={
              [
                <p key={11}>
                  As a Freelance Videographer and Photographer, I specialize in
                  capturing the essence of special occasions, including weddings,
                  debuts, and birthday parties. My work focuses on documenting
                  every significant moment with precision and creativity, using
                  professional-grade cameras, lenses, and lighting to produce
                  high-quality images that preserve cherished memories.
                </p>,
                <p key={12}>  
                  In addition to photography, I work with dierent companies as a
                  freelancer to provide comprehensive live-streaming services for
                  pageants and various events. I handle all aspects of the live stream
                  setup, including configuring software, setting up audio-capturing
                  devices, and monitoring audio and video quality to ensure a
                  seamless broadcast. I aim to deliver a professional live-streaming
                  experience, ensuring every detail is captured and shared with the
                  audience in real time.
                </p>
              ]
            }
            feat={
              [
                // <span>Video Production</span>, <span>Facebook Live Streaming</span>, <span>Web Video</span> , <span>Video Post-Production</span>, <span>Videography</span>, <span>Photography</span>, <span>Event Photography</span>, <span>Wedding Photography</span>,<span>Live Video Streaming</span>,<span>Live Streaming</span>
              ]
            }
          />


          <JobDes key={2} date='Apr 2023 - Sep 2023' 
            des='Web Developer' 
            role='Visitour.ph' 
            epx={
              [
                <p key={21}>
                  Visitour is a startup company that focuses on travel and local tourist destinations in the Philippines
                </p>,
                <p key={22}>
                  After I audited Visitour.ph`s website, I found a lot of SEO flaws such as improper usage of html heading tags, No metatag contents, unoptimized Images, lighthouse errors, and many more, I helped them optimized, rebuild their website and create website designs using figma for their X Deal clients.
                </p>
              ]
            }
            feat={
              [
                // <span>Web Development</span>, <span>Web Design</span>, <span>Responsive Web Design</span>, <span>Web Analytics</span>, <span>React.js</span>, <span>Embedded JavaScript (EJS)</span>, <span>Node.js</span>, <span>Git</span>, <span>Figma (Software)</span>
              ]
            }
          />


          <JobDes key={3} date='Sep 2022- Jan 2023' 
            des='SEO Strategist' 
            role='Hyperlilo' 
            epx={
              [
                <p key={31}>
                  Hyperlilo is a Digital Marketing Agency that helps local and
                  foreign businesses become more strategic about their digital
                  marketing strategy.
                </p>,
                <p key={32}>
                  As an SEO strategist/expert my job was to do keyword research,
                  generate google analytics report, content/ image optimization and
                  review, copyright checking, GMB Optimization, GMb posting,
                  content posting, on-page optimization, seo audit, markup tags
                  error checking, etc.
                </p>
              ]
            }
            feat={
              [
                // <span>Search Engine Optimization (SEO)</span>, <span>local SEO</span>, <span>E-Commerce</span>, <span>Next.js</span>
              ]
            }
          />


          <JobDes key={4} date='Apr 2022 - Sep 2022' 
            des='Real Estate VA Admin/Workforce' 
            role='ACS VA , Malaybalay, Bukidnon' 
            epx={
              [
                <p key={41}>
                  I Started working as a RE VA Cold Caller Agent, and got promoted
                  to an Admin position after 3 months of working.
                </p>,
                <p key={42}>
                  As a VA Admin, my job covers many things, from email responses
                  and monitoring, managing and monitoring more than 50 agents&apos;
                  productivity, managing dialers and tracking its data, to sending
                  End of Day shift reports to more than 5 dierent clients.
                </p>
              ]
            }
            feat={
              [
                // <span>Project Management</span>, <span>People Management</span>, <span>Document Management</span>, <span>Real Estate</span>, <span>Real Estate Listings</span>, <span>Real Property</span>
              ]
            }
          />

          

      
        

        </div>
      </div>
      
    </main>
  )
}

export default Page