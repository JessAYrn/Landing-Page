import React from "react";
import styles from "./Team.module.scss";
import { HeroSection } from "../Components/HeroSection";

const teamInfo = [
  {
    role: "Creator And Software Engineer",
    name: "Jesse Williams Jr.",
    img: "https://pbs.twimg.com/profile_images/1683173716954415104/2iEb-5U8_400x400.jpg",
  },
  {
    role: "Co-Founder",
    name: "Meta Owl",
    img: "https://pbs.twimg.com/profile_images/1674246321379717120/UQCUvFOp_400x400.jpg",
  },
  {
    role: "Software Developer",
    name: "Samuel",
    img: "https://cdn.discordapp.com/attachments/1171360992400248863/1175159127421505597/Howard_Allen.png",
  },
];

const Team = () => {
  return (
    <>
      <HeroSection text="Team" />
      <div className={styles.inner}>
        {teamInfo.map((info, index) => (
          <div className={styles.box} key={index}>
            <img src={info.img} alt={info.name} />
            <h3>{info.name}</h3>
            <p>{info.role}</p>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
};

export default Team;
