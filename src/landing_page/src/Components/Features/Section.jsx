import React, { useEffect } from 'react'
import styles from './Section.module.scss'


const Section = ({text,Icon,header,img}) => {

  return (
    <div 

    className={styles.container}>
        {/* <div className={styles.overlay}></div> */}
        
        <div 
        className={styles.inner}>
        <div 
        className={styles.left}>
        <h1>{header}</h1>
        <p>{text}</p>
        </div>

        <div className={styles.right}>
          <img
          src={img}
          />
        </div>
        </div>
        
        
    </div>
  )
}

export default Section