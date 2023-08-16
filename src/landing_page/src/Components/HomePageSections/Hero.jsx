import React from 'react'
import styles from './Hero.module.scss'


const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <img
            className={styles.heroLogo}
                src='https://cdn.discordapp.com/attachments/1077489091840585800/1131676403272790176/P2.png'
                /> 
                <h1>Personal Dao<span style={{color:' #F2A900'}}>.</span></h1>

                <h1>Non-custodial, Non-fungible Application. Own the keys to your own personal treasury and data storage</h1>

                <button>Purchase App</button>

                <p
                className={styles.subHero}
                >100% on $ICP,<span><img 
                className={styles.icpLogo}
                src='https://cryptologos.cc/logos/internet-computer-icp-logo.png'/></span> complete with a unique URL.</p>
            </div>

            <div className={styles.right}>
                <img
                src='https://cdn.discordapp.com/attachments/1077489091840585800/1131676403272790176/P2.png'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero