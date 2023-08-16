import React from 'react'
import { HeroSection } from '../Components/HeroSection'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './Architecture.module.css'
import { AppContext } from './HomePage'
import transition from '../transition'
const architectureDetails = [
    {
        sn:'1',
        header:'System Overview',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'2',
        header:'System Cmoponents In-depth',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'3',
        header:'Verification of Canister Code',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'4',
        header:'External System Dependencies',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    }
]
const ArchitecturePage = () => {
  return (
    <AppContext.Provider>
        <div className={styles.container}>
        <HeroSection
            img='../../assets/bgSections.svg'
            text='Personal Dao Architecture'
        />
        {
            architectureDetails?.map((ad)=>(
                <div className={styles.inner}>
                <Accordion
        style={{backgroundColor:'transparent', color:'white', borderTop:'1px solid gray', borderBottom:'1px solid gray'}}
        >
        <AccordionSummary
        //   expandIcon={<ExpandMoreIcon
        //     style={{color:'#F2A900'}}
        //     />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={styles.headerArea}>
            <p>{ad.sn}</p>
            
            <h2>{ad.header}</h2>

            <ExpandMoreIcon
            style={{color:'#F2A900'}}
            />
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
          {ad.details}
          </p>
        </AccordionDetails>
      </Accordion>
                </div>
            ))
        }
    </div>
    </AppContext.Provider>    
  )
}

export default transition(ArchitecturePage)