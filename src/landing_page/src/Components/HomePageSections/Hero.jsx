import React from "react";
import styles from "./Hero.module.scss";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.header_title}>Personal Dao</h1>
        <h2>
          Own the keys to your own personal treasury and data storage.
          Non-custodial, Non-fungible DApp.
        </h2>

        <a target="_blank" href="https://discord.gg/45qhqMKbBf">
          <button className={styles.button}>Join Discord</button>
        </a>

        <p className={styles.subHero}>
          100% on $ICP
          <span>
            <img
              className={styles.icpLogo}
              src="https://cryptologos.cc/logos/internet-computer-icp-logo.png"
            />
          </span>{" "}
          complete with a unique URL.
        </p>
      </div>
    </div>
  );
};

export default Hero;
