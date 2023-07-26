import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <Link
            to='/'
            className={styles.logo}>
                <img
                src='https://pbs.twimg.com/profile_images/1679231966598557696/p6EFLZuc_400x400.jpg'
                />
            </Link>

            <div className={styles.left}>
            <ul>
                <li><Link to='/features'
                style={{textDecoration:"none",color:'white'}}
                >Features</Link></li>
                <li>
                    {/* <Link to='></Link> */}
                    Roadmap</li>
                <li>Whitepaper</li>
                <li>Architecture</li>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Team</li>
                <li>Socials</li>
            </ul>

            <button>
                Purchase app
            </button>
            </div>
            

        </div>
        
    </div>
  )
}

export default Navbar