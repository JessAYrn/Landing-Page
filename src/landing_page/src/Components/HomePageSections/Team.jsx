import React from 'react'
import styles from './Team.module.scss'

const teamInfo=[
    {
        role:'Creator And Software Engineer',
        name:'Jesse Williams Jr.',
        img:'https://pbs.twimg.com/profile_images/1683173716954415104/2iEb-5U8_400x400.jpg'
    },
    {
        role:'Co-Founder',
        name:'Meta Owl',
        img:'https://pbs.twimg.com/profile_images/1674246321379717120/UQCUvFOp_400x400.jpg'
    },
    {
        role:'Community Manager and Moderator',
        name:'Milan Perry',
        img:'https://pbs.twimg.com/profile_images/1638131146104926208/UndFs6JS_400x400.jpg'
    },
    {
        role:'Frontend Developer',
        name:'Lolu',
        img:'https://pbs.twimg.com/profile_images/1564699051668430856/2RDwHx0N_400x400.jpg'
    }
]



const Team = () => {
  return (
    <div className={styles.container}>
             <h1
             style={{textAlign:'center', marginBottom:'30px'}}
             >Team</h1>
        <div className={styles.inner}>
            {
                teamInfo.map((info,index)=>(
                    <div 
                    className={styles.box}
                    key={index}
                    >
                        <img src={info.img}
                        alt={info.name}
                        />
                       <h3>{info.name}</h3>
                       <p>{info.role}</p>
                    </div>
                ))
            }
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Team