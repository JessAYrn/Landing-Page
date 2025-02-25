import React from "react";
import RoadmapSection from "./sections/RoadmapSection";
import GreetingSection from "./sections/GreetingSection";
import WhitePaperSection from "./sections/WhitePaperSection";
import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import  theme  from "./theme";
import NavBar, { ROUTES } from "./NavBar";
import TokenomicsSection from "./sections/TokenomicsSection";
import DaosSection from "./sections/DaosSection";

const Router = (props) => {
  
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <NavBar />
        <Routes>
            <Route path={ROUTES.home} element={<GreetingSection />} />
            <Route path={ROUTES.whitepaper} element={<WhitePaperSection />} />
            <Route path={ROUTES.roadmap} element={<RoadmapSection />} />
            <Route path={ROUTES.about} element={<GreetingSection />} />
            <Route path={ROUTES.tokenomics} element={<TokenomicsSection />} />
            <Route path={ROUTES.daos} element={<DaosSection />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Router;
