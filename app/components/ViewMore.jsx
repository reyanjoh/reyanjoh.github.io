import React from 'react'
import styles from './component.module.css'
import Link from 'next/link'

function ViewMore(prop) {
  return (
    <Link className={styles.archive} href={prop.link}>
        {prop.text}
    </Link>
  )
}

export default ViewMore