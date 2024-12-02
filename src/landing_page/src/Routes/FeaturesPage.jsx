import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { FcMultipleSmartphones } from "react-icons/fc";
import styles from "./Features.module.css";
import FeatureTitle from "../Components/Features/FeatureTitle";
import {
  FeatureCardFive,
  FeatureCardFour,
  FeatureCardSeven,
  FeatureCardSix,
  FeatureCardThree,
  FeatureCardTwo,
} from "../Components/Features/Card";


const featureData = [
  {
    title: "100 % on-chain",
    text: "Personal Dao is a web 3 application built on the Internet Computer. Each copy consists of its own front-end canister (aka User interface canister) and its own back-end canister (aka database/ server canister)",
    Icon: <BiNetworkChart />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 1,
    card: FeatureCardTwo,
  },
  {
    title: "DAO controlled",
    text: "The application is a private server and treasury for owners of the utility NFTs and their respective communities.​​​ Users will also be able to keep a shared journal, and a shared treasury that is governed by members of the treasury.",
    Icon: <GoPeople />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 2,
    card: FeatureCardThree,
  },
  {
    title: "Multiple Instances",
    text: "Many instances of The Digital Time Capsule application is deployed to the internet computer. Each instance of the application has its own unique front-end & back-end canister id’s and it’s own unique NFT ID.",
    Icon: <FcMultipleSmartphones />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 3,
    card: FeatureCardFour,
  },
  {
    title: "Privacy",
    text: "The App aims to serve as a private server, wallet and treasury where the owner (and principals permitted by the owner) has access to various features",
    Icon: <BiNetworkChart />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 4,
    card: FeatureCardFive,
  },
  {
    title: "Control",
    text: "Control of the canisters (front-end & back-end) is under the sole influence of the owner of the corresponding NFT",
    Icon: <BiNetworkChart />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 5,
    card: FeatureCardSix,
  },
  {
    title: "Governance Rights",
    text: "All members of the treasury receive privileges and governance rights within the app/treasury. The owner also receives special governance rights within the treasury.",
    Icon: <BiNetworkChart />,
    img: "https://static.vecteezy.com/system/resources/previews/011/047/536/original/smartphone-and-mobile-phone-free-png.png",
    id: 6,
    card: FeatureCardSeven,
  },
];

const Features = () => {
  return (
    <>
        <div className={styles.container}>
          <div className={styles.left}>
            {featureData?.map((feature) => {
              const { img, title, text, Icon } = feature;
              return (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.text}</FeatureTitle>
                </li>
              );
            })}
          </div>

          <div className={styles.right}>
            <div>
              {featureData.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default Features;
