import React from "react";
import RoadmapSection from "./sections/RoadmapSection";
import GreetingSection from "./sections/GreetingSection";
import WhitePaperSection from "./sections/WhitePaperSection";
import { Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import  theme  from "./theme";
import NavBar, { ROUTES } from "./NavBar";

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
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default Router;
