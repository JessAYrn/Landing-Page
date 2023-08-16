import React from 'react'
import { AppContext } from './HomePage'
import styles from './WhitepaperPage.module.css'
import { HeroSection } from '../Components/HeroSection'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import transition from '../transition'

const whitepaperDetails = [
    {
        sn:'1',
        header:'Product Overview',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'2',
        header:'Internet Computer Overview',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'3',
        header:'Personal Dao',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'4',
        header:'Purpose of the Project',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'5',
        header:'Product Price',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'6',
        header:'Personal Dao Journal and Treasury',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
    {
        sn:'7',
        header:'Tokenomics',
        details:'Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.'
    },
]

const WhitepaperPage = () => {
  return (
    <AppContext.Provider>
        <div className={styles.container}>
        <HeroSection
            img='../../assets/bgSections.svg'
            text='Personal Dao Whitepaper'
        />
        {
            whitepaperDetails?.map((wd)=>(
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
            <p>{wd.sn}</p>
            
            <h2>{wd.header}</h2>

            <ExpandMoreIcon
            style={{color:'#F2A900'}}
            />
            </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className={styles.content}>
          {wd.details}
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

export default transition(WhitepaperPage);