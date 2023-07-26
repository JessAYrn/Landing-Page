import React, {useState, useEffect} from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import { NAV_LINKS } from './functionsAndConstants/Constants';
// import { NavBar } from './Components/navigation/NavBar';
import Navbar from './Components/HomePageSections/Navbar';
import Features from './Routes/FeaturesPage';
import { HeroSection } from './Components/HeroSection';

const Router = (props) => {
       
    return(
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path={NAV_LINKS.dashboard} element={<HomePage />}/>
                <Route path='/features' element={<Features />}/>
            </Routes>
        </HashRouter>
    );
};

export default Router;