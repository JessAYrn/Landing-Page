import React, { useEffect } from "react";
import styles from "./FAQs.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.inner}>
        <h1>Frequently Asked Questions</h1>

        <div className={styles.accordionContainer}>
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              marginBottom: "50px",
              borderRadius: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#F7931A" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h3>
                What is <span style={{ color: "#F7931A" }}>Personal DAO</span>{" "}
                and what does it do?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <span style={{ color: "#F7931A" }}>Personal DAO</span> is a web
                3 application that is hosted completely on the internet
                computer. The application is meant to be a private server and
                treasury for owners of the utility NFTs and their respective
                communities. Users will be able to store their sentiments,
                files, photos, videos, contacts, passwords, secure notes, and
                cryptocurrencies.​​​ Users will also be able to keep a shared
                journal, and a shared treasury that is governed by members of
                the treasury.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              marginBottom: "50px",
              borderRadius: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#F7931A" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3>How Does It Work?</h3>
            </AccordionSummary>
            <AccordionDetails>
              <ul style={{ padding: "10px" }}>
                <li>
                  Many instances of The{" "}
                  <span style={{ color: "#F7931A" }}>Personal DAO</span>{" "}
                  application is deployed to the internet computer.
                </li>
                <li>
                  Each instance of the application has its own unique front-end
                  & back-end canister id’s and it’s own unique NFT ID.
                </li>
                <li>
                  Each backend canister is assigned as the sole controller of
                  itself and the sole controller of its respective front end
                  canister.
                </li>
                <li>
                  Smart contracts allow the back-end canister to perform all
                  canister controller operations upon itself and upon the
                  Respective front-end canister. (Note: The back-end canister
                  will only execute canister controller operations if they come
                  from the principal that owns the corresponding NFT. This
                  leaves the owner of the NFT with sole access to the back-end
                  and front-end canisters’ settings)
                </li>
                <li>
                  To access owner privileges, the owner of the NFT signs into
                  the application using the wallet that holds the NFT.
                </li>
                <li>
                  Smart contracts check your principal to verify you own the
                  NFT.​
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              marginBottom: "50px",
              borderRadius: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#F7931A" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3>
                How can i own a copy of{" "}
                <span style={{ color: "#F7931A" }}>Personal DAO</span>
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>Join the discord</p>
            </AccordionDetails>
          </Accordion>
          <Accordion
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              marginBottom: "50px",
              borderRadius: "5px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#F7931A" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h3>How can I get updates</h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>Join the discord</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
