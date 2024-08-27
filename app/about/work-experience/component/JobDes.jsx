import React from 'react'
import styles from '../page.module.css'

function JobDes(info) {
  return (
    
    <div className={styles.project}>
            <div className={styles.date}> 
              <p>{info.date}</p>


            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <h2>{info.des} · {info.role}</h2>
                <section>
                    {info.epx}
                </section>
              </div>
              <div className={styles.feat}>
                {info.feat}
              </div>
              
            </div>
          </div>

  )
}

export default JobDes