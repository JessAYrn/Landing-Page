import React from 'react'
import styles from './Roadmap.module.scss'
import { BiArrowToRight } from 'react-icons/bi';


const Roadmap = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.sectionOne}>
               <h3>Roadmap</h3>

               <p>View Entire Roadmap <BiArrowToRight/></p> 
            </div>

        <div className={styles.timelineitems}>
            <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinedate}>Q1</div>
                <div className={styles.timelinecontent}>
                <h3>Stage One</h3>
                <ul>
                    <li>Beginning</li>
                    <li>Beginning</li>
                    <li>Beginning</li>
                    <li>Beginning</li>
                </ul>
                </div>
            </div>
            
            <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinedate}>Q2</div>
                <div className={styles.timelinecontent}>
                <h3>Stage Two</h3>
                <ul>
                    <li>Design</li>
                    <li>Design</li>
                    <li>Design</li>
                    <li>Design</li>
                </ul>
                </div>
            </div>
            
            <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinedate}>Q3</div>
                <div className={styles.timelinecontent}>
                <h3>Stage Three</h3>
                <ul>
                    <li>Build</li>
                    <li>Build</li>
                    <li>Build</li>
                    <li>Build</li>
                </ul>
                </div>
            </div>

            <div className={styles.timelineitem}>
                <div className={styles.timelinedot}></div>
                <div className={styles.timelinedate}>Q4</div>
                <div className={styles.timelinecontent}>
                <h3>Stage Four</h3>
                <ul>
                    <li>Production</li>
                    <li>Production</li>
                    <li>Production</li>
                    <li>Production</li>
                </ul>
                </div>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Roadmap;