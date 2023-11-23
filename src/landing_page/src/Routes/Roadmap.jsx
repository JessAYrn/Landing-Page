import React from "react";
import styles from "./Roadmap.module.scss";
import { HeroSection } from "../Components/HeroSection";
import { AppContext } from "./HomePage";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import transition from "../transition";

const Roadmap = () => {
  return (
    <AppContext.Provider>
      <div className={styles.container}>
        <HeroSection img="../../assets/bgSections.svg" text="Roadmap" />

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
                <p>Continous</p>

                <h2>Development</h2>

                <ExpandMoreIcon style={{ color: "#F2A900" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.content}>
                Personal Dao is a web 3 application that is hosted completely on
                the internet computer. The application is meant to be a private
                server and treasury for owners of the utility NFTs and their
                respective communities. Users will be able to store their
                sentiments, files, photos, videos, contacts, passwords, secure
                notes, and cryptocurrencies.​​​ Users will also be able to keep
                a shared journal, and a shared treasury that is governed by
                members of the treasury.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderBottom: "1px solid gray",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={styles.headerArea}>
                <p>Completed</p>

                <h2>Branding And Design</h2>

                <ExpandMoreIcon style={{ color: "#F2A900" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.content}>
                Personal Dao is a web 3 application that is hosted completely on
                the internet computer. The application is meant to be a private
                server and treasury for owners of the utility NFTs and their
                respective communities. Users will be able to store their
                sentiments, files, photos, videos, contacts, passwords, secure
                notes, and cryptocurrencies.​​​ Users will also be able to keep
                a shared journal, and a shared treasury that is governed by
                members of the treasury.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              borderBottom: "1px solid gray",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={styles.headerArea}>
                <p>Completed</p>

                <h2>Community Building</h2>

                <ExpandMoreIcon style={{ color: "#F2A900" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.content}>
                Personal Dao is a web 3 application that is hosted completely on
                the internet computer. The application is meant to be a private
                server and treasury for owners of the utility NFTs and their
                respective communities. Users will be able to store their
                sentiments, files, photos, videos, contacts, passwords, secure
                notes, and cryptocurrencies.​​​ Users will also be able to keep
                a shared journal, and a shared treasury that is governed by
                members of the treasury.
              </p>
            </AccordionDetails>
          </Accordion>

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
                <p>Future</p>

                <h2>Product Launch</h2>

                <ExpandMoreIcon style={{ color: "#F2A900" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.content}>
                Personal Dao is a web 3 application that is hosted completely on
                the internet computer. The application is meant to be a private
                server and treasury for owners of the utility NFTs and their
                respective communities. Users will be able to store their
                sentiments, files, photos, videos, contacts, passwords, secure
                notes, and cryptocurrencies.​​​ Users will also be able to keep
                a shared journal, and a shared treasury that is governed by
                members of the treasury.
              </p>
            </AccordionDetails>
          </Accordion>

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
                <p>Future</p>

                <h2>Multi-chain support</h2>

                <ExpandMoreIcon style={{ color: "#F2A900" }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.content}>
                Personal Dao is a web 3 application that is hosted completely on
                the internet computer. The application is meant to be a private
                server and treasury for owners of the utility NFTs and their
                respective communities. Users will be able to store their
                sentiments, files, photos, videos, contacts, passwords, secure
                notes, and cryptocurrencies.​​​ Users will also be able to keep
                a shared journal, and a shared treasury that is governed by
                members of the treasury.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default transition(Roadmap);
