import React, { useEffect } from "react";
import styles from "./Roadmap.module.scss";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.sectionOne}>
          <h3>Roadmap</h3>
        </div>

        <div className={styles.timelineitems}>
          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2023</div>
            <div className={styles.timelinecontent}>
              <ul>
                <li>UI redesign</li>
                <li>Treasury protocols</li>
                <li>Governance protocols</li>
                <li>Cycles replenishment service</li>
                <li>Update delivery Upgrader protocols for Personal DAOs</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2024</div>
            <div className={styles.timelinecontent}>
              <ul>
                <li>Asset profiles</li>
                <li>ETH integration</li>
                <li>BTC integration</li>
                <li>DEX integration</li>
                <li>ICP tokens staking</li>
                <li>OpenChat Integration</li>
                <li>End-to-End encryption</li>
                <li>Stable coin integration</li>
                <li>Dropbox storage solution</li>
                <li>Account & wallet recovery protocols</li>
                <li>Charts displaying treasury values and analytics</li>
              </ul>
            </div>
          </div>

          <div className={styles.timelineitem}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinedate}>2025</div>
            <div className={styles.timelinecontent}>
              <ul>
                <li>Calendar</li>
                <li>NFT Wallet</li>
                <li>OTC exchange</li>
                <li>Address Book</li>
                <li>Beneficiaries</li>
                <li>AI integration</li>
                <li>Password Manager</li>
                <li>Push notifications</li>
                <li>Community storage solution</li>
                <li>Integrate on-ramp solution</li>
                <li>Open source the Personal DAO code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
