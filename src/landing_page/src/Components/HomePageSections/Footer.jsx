import React from "react";
import styles from "./Footer.module.scss";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const TestFooter = () => {
  const { pathname } = useLocation();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.mediaIcons}>
          <ul>
            <li className={pathname === "/blog" ? `${styles.active}` : ``}>
              <Link
                to="/blog"
                style={{ textDecoration: "none", color: "white" }}
              >
                Media
              </Link>
            </li>
          </ul>
          <IconButton
            aria-label="discord"
            onClick={() => openInNewTab("https://discord.gg/45qhqMKbBf")}
          >
            <FaDiscord size="18px" color="white" />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            onClick={() => openInNewTab("https://twitter.com/Personal_DAO")}
          >
            <FaTwitter size="18px" color="white" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default TestFooter;
