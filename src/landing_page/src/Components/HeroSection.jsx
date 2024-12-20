import React from "react";
import styles from "./HeroSection.module.css";

export const HeroSection = ({ img, text }) => {
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
    </div>
  );
};
