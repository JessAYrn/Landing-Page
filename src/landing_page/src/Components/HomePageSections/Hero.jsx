import React from "react";
import styles from "./Hero.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import {} from "../../../assets/newLogo.svg";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.header_title}>Personal DAO</h1>
        <h2>Own the keys to your own personal treasury and data storage.</h2>
        <h2> Non-custodial, Non-fungible Decentralized App.</h2>

        <div>
          <img
            className={styles.icpsvg}
            src="https://cdn.discordapp.com/attachments/950584476658962473/1179006599499628636/icpp.png"
            alt="ihg"
          />
        </div>

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
