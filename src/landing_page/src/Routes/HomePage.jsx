import React, { createContext, useReducer, useEffect, useState} from 'react';
import Analytics from './Pages/Analytics';
import "./HomePage.scss";
import { DEFAULT_APP_CONTEXTS } from '../functionsAndConstants/Constants';
import { NavBar } from '../Components/navigation/NavBar';
import Hero from '../Components/HomePageSections/Hero';
import Features from '../Components/HomePageSections/Features';
import Roadmap from '../Components/HomePageSections/Roadmap';
import FAQs from '../Components/HomePageSections/FAQs';
import Team from '../Components/HomePageSections/Team';

export const AppContext = createContext(DEFAULT_APP_CONTEXTS);

const HomePage = () => {

    return (
        <AppContext.Provider>
            <div 
            className='home-container'
            style={{color: "white"}}> 
            <Hero/>
            <Features/>
            <Roadmap/>
            <FAQs/>
            <Team/>
            </div> 
        </AppContext.Provider>
    );
};

export default HomePage;