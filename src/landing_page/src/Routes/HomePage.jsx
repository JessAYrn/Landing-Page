import React, { createContext, useReducer, useEffect, useState} from 'react';
import Analytics from './Pages/Analytics';
import "./HomePage.scss";
import { DEFAULT_APP_CONTEXTS } from '../functionsAndConstants/Constants';

export const AppContext = createContext(DEFAULT_APP_CONTEXTS);

const HomePage = () => {

    return (
        <AppContext.Provider>
            <div style={{color: "white"}}> Testing </div> 
        </AppContext.Provider>
    );
};

export default HomePage;