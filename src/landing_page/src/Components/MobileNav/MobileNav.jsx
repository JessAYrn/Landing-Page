import React from "react";
import styles from "./MobileNav.module.scss";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Roadmap", href: "/roadmap" },
  { title: "Whitepaper", href: "/whitepaper" },
  { title: "Team", href: "/team" },
  { title: "Architecture", href: "/architecture" },
  { title: "Media", href: "/blog" },
];

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const MobileNav = ({ setOpen, open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVars}
          animate="animate"
          exit="exit"
          initial="initial"
          className={styles.container}
        >
          <div className={styles.top}>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => setOpen(!open)}
            >
              <p>Home</p>
            </Link>

            <p onClick={() => setOpen(!open)}>Close</p>
          </div>

          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className={styles.linksContainer}
          >
            {navLinks.map((link, index) => (
              <div className={styles.link}>
                <MobileNavLink
                  setOpen={setOpen}
                  open={open}
                  title={link.title}
                  key={index}
                  href={link.href}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, href, setOpen, open }) => {
  return (
    <motion.div onClick={() => setOpen(!open)} variants={mobileLinkVars}>
      <Link style={{ textDecoration: "none" }} to={href}>
        <div>
          {title}
          <span>
            <BsArrowUpRight size={30} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
