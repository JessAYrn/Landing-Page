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
import AOS from 'aos'
import 'aos/dist/aos.css'
import transition from '../transition';


export const AppContext = createContext(DEFAULT_APP_CONTEXTS);

const HomePage = () => {
    useEffect(()=>{
        AOS.init({duration: 2000});
      })
    return (
        <AppContext.Provider>
            <div 
            className='home-container'
            style={{color: "white"}}> 
            <Hero
             data-aos='fade-up'
            />
            <Features
             data-aos='fade-up'
            />
            <Roadmap
             data-aos='fade-up'
            />
            <FAQs/>
            <Team/>
            </div> 
        </AppContext.Provider>
    );
};

export default transition(HomePage);
