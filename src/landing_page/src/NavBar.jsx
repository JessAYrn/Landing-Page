import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKGROUND_COLOR } from "./theme";


export const ROUTES = {
    home:  "/",
    daos: "/daos",
    roadmap: "/roadmap",
    tokenomics: "/tokenomics",
    whitepaper: "/whitepaper",
}


const NavBar = () => {
    const { pathname } = useLocation();

    let selectedTab = Object.keys(ROUTES).find(key => ROUTES[key] === pathname);

    const navigate = useNavigate();

    return (
        <Box xs={12} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"right"} sx={{ position: "fixed", top: "0", right: "0", zIndex: "1000", backgroundColor: BACKGROUND_COLOR}}>
            <Tabs 
                sx={{ height: "43px", minHeight: "auto"}}
                value={selectedTab} 
                onChange={(event, newValue) => navigate(ROUTES[newValue])} 
                aria-label="basic tabs example" 
                variant="scrollable"
                scrollButtons="auto"
                indicatorColor={"secondary"}
            >
                { Object.keys(ROUTES).map((option) => { return <Tab value={option} label={option}/> }) }
            </Tabs>
        </Box>
    )
}   

export default NavBar;