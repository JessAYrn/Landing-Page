import React from 'react'
import styles from './Navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaHamburger } from 'react-icons/fa'


const Navbar = ({open,setOpen}) => {
    const {pathname}=useLocation()
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            <Link
            to='/'
            className={styles.logo}>
                <img
                src='https://cdn.discordapp.com/attachments/1077489091840585800/1131676403272790176/P2.png'
                />
            </Link>

            <div className={styles.left}>
            <ul>
                <li
                className={pathname === '/features'? `${styles.active}`:``}
                ><Link to='/features'
                style={{textDecoration:"none",color:'white'}}
                >Features</Link></li>
                <li className={pathname === '/roadmap'? `${styles.active}`:``}>
                    <Link 
                    style={{textDecoration:"none",color:'white'}}
                    to='/roadmap'>
                    Roadmap
                    </Link>
                </li>
                <li
                className={pathname === '/whitepaper'? `${styles.active}`:``}
                >
                    <Link 
                    to='/whitepaper'
                    style={{textDecoration:"none",color:'white'}}
                    >
                    Whitepaper
                    </Link>    
                </li>
                <li
                className={pathname === '/architecture'? `${styles.active}`:``}
                >
                <Link 
                to='/architecture'
                style={{textDecoration:"none",color:'white'}}
                >
                    Architecture
                </Link>
                </li>
                <li>Blog</li>
                {/* <li>FAQs</li>
                <li>Team</li>
                <li>Socials</li> */}
            </ul>

            <button>
                Purchase app
            </button>
            </div>
            <div className={styles.mobileHamburger}
            onClick={()=>setOpen(!open)}
            >
                <FaBars
                size={20}
                />
            </div>
            
        </div>
        
    </div>
  )
}

export default Navbar