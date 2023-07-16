import React, {useState, useEffect} from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import { NAV_LINKS } from './functionsAndConstants/Constants';

const Router = (props) => {
       
    return(
        <HashRouter>
            <Routes>
                <Route path={NAV_LINKS.dashboard} element={<HomePage />}/>
            </Routes>
        </HashRouter>
    );
};

export default Router;