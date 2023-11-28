import React from "react";
import { HeroSection } from "../Components/HeroSection";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Architecture.module.css";
import { AppContext } from "./HomePage";
import transition from "../transition";
const architectureDetails = [
  {
    sn: "1",
    header: "Canister Architecture",
    image:
      "https://cdn.discordapp.com/attachments/950584476658962473/1174716488968572928/Screenshot_from_2023-11-16_15-57-36.png",
    details:
      "The diagram below illustrates the canister controller settings for an instance of Personal DAO deployed to the Internet Computer. The arrow indicates that a canister controls another, with the canister on the pointed end of the arrow being the controlled by the canister at the opposite end of the arrow.",
  },
  {
    sn: "2",
    header: "Update Propagations",
    image:
      "https://cdn.discordapp.com/attachments/950584476658962473/1174716488679174214/Screenshot_from_2023-11-16_15-58-21.png",
    details:
      "The diagram below illustrates the mechanism by which Personal DAOs are updated while preserving user sovereignty and canister controller settings of each individual Personal DAO. The Updates are directly uploaded to the master copy, which the dev team maintains control over. From there, the Upgrades Store canister pulls those updates from the master copy and stores them. The other Personal DAO copies deployed to the internet computer may then make a request for those updates and then install those updates to themselves.",
  },
  // {
  //   sn: "3",
  //   header: "Verification of Canister Code",
  //   details:
  //     "Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.",
  // },
  // {
  //   sn: "4",
  //   header: "External System Dependencies",
  //   details:
  //     "Personal Dao is a web 3 application that is hosted completely on the internet computer. The application is meant to be a private server and treasury for owners of the utility NFTs and their respective communities. Users will be able to store their sentiments, files, photos, videos, contacts, passwords, secure notes, and cryptocurrencies.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.",
  // },
];
const ArchitecturePage = () => {
  return (
    <AppContext.Provider>
      <div className={styles.container}>
        <HeroSection img="../../assets/bgSections.svg" text="Architecture" />
        {architectureDetails?.map((ad) => (
          <div className={styles.inner}>
            <Accordion
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div className={styles.headerArea}>
                  <p>{ad.sn}</p>

                  <h2>{ad.header}</h2>

                  <ExpandMoreIcon style={{ color: "#F2A900" }} />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p className={styles.content}>{ad.details}</p>
                {ad?.image ? <img src={ad.image} /> : null}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export default transition(ArchitecturePage);
