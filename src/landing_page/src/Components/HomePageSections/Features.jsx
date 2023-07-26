import React from 'react'
import styles from './Features.module.scss'
import {BsApp, BsArchive, BsArrowRight, BsBadgeHd, BsLaptop, BsOctagonHalf, BsPeople} from 'react-icons/bs'
import {SiChainlink} from 'react-icons/si'
import { RiGitRepositoryPrivateLine, RiGovernmentLine } from 'react-icons/ri'
import { AiFillControl } from 'react-icons/ai'
import {TbBoxMultiple} from 'react-icons/tb'


const Features = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
            
            <div className={styles.sectionOne}>
            <h3>
            Personal Dao is a non-custodial application that can be purchased, owned, transferred and updated without the need for any coding experience.
            </h3>

            <p>
            A web 3 application that is 100 % on-chain hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.
            </p>
            </div>

            <div className={styles.sectionTwo}>
                <div>
                 View Features <BsArrowRight/>    
                </div>
            </div>

            <div className={styles.sectionThree}>
                <div>
                <SiChainlink
                size={30}
                />
                    <h3>100 % on-chain</h3>
                   
                   <p>Personal Dao is a web 3 application built on the Internet Computer. Each copy consists of its own front-end canister (aka User interface canister) and its own back-end canister (aka database/ server canister)</p> 
                </div>

                <div>
                    <BsPeople
                    size={30}
                    />
                    <h3>DAO controlled</h3>
                    <p>
                    The application is a private server and treasury for owners of the utility NFTs and their respective communities.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.
                    </p>
                    
                </div>

                <div>
                    <TbBoxMultiple
                    size={30}
                    />
                    {/* <GrMultiple/> */}
                    <h3>Multiple Instances</h3>
                    <p>Many instances of The Digital Time Capsule application is deployed to the internet computer. Each instance of the application has its own unique front-end & back-end canister id’s and it’s own unique NFT ID.</p>
                </div>


                <div>
                <RiGitRepositoryPrivateLine
                size={30}
                />
                    <h3>Privacy</h3>
                    <p> The App aims to serve as a private server, wallet and treasury where the owner (and principals permitted by the owner) has access to various features </p>
                </div>

                <div>
                <AiFillControl
                size={30}
                />
                    <h3>Control</h3>
                    <p>Control of the canisters (front-end & back-end) is under the sole influence of the owner of the corresponding NFT</p>
                </div>

                <div>
                <RiGovernmentLine
                size={30}
                />
                    <h3>Governance Rights</h3>
                    <p>All members of the treasury receive privileges and governance rights within the app/treasury. The owner also receives special governance rights within the treasury.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features