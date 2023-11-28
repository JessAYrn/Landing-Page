import React, { useState, useEffect } from "react";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import HomePage from "./Routes/HomePage";
import { NAV_LINKS } from "./functionsAndConstants/Constants";
import Navbar from "./Components/HomePageSections/Navbar";
import Features from "./Components/HomePageSections/Features";
import { HeroSection } from "./Components/HeroSection";
import Roadmap from "./Components/HomePageSections/Roadmap";
import WhitepaperPage from "./Routes/WhitepaperPage";
import ArchitecturePage from "./Routes/ArchitecturePage";
import { AnimatePresence } from "framer-motion";
import Team from "./Routes/Team";
import MobileNav from "./Components/MobileNav/MobileNav";
import Footer from "./Components/HomePageSections/Footer";
import FAQs from "./Components/HomePageSections/FAQs";
import Blog from "./Routes/Blog";
const Router = (props) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <MobileNav open={open} setOpen={setOpen} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path={NAV_LINKS.dashboard}
            element={<HomePage open={open} setOpen={setOpen} />}
          />
          <Route
            path="/features"
            element={
              <>
                <Features open={open} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/roadmap"
            element={
              <>
                <Roadmap open={open} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Blog open={open} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/whitepaper"
            element={
              <>
                <WhitepaperPage open={open} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/architecture"
            element={<ArchitecturePage open={open} setOpen={setOpen} />}
          />
          <Route
            path="/team"
            element={
              <>
                <Team open={open} setOpen={setOpen} />
              </>
            }
          />
          <Route
            path="/faqs"
            element={
              <>
                <FAQs />
              </>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer open={open} setOpen={setOpen} />
    </>
  );
};

export default Router;
