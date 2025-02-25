import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { WHITE_COLOR, BACKGROUND_COLOR, CONTRAST_COLOR } from "../theme";
import { ROUTES } from "../NavBar";

const GreetingSection = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();


    return (
        <Grid container
          style={{
            backgroundImage: `url("bgImage-1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
      >
        <Grid 
            xs={12}
            width="100%" 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            flexDirection="column"
        >
            <Grid xs={12} width={"100%"} maxWidth={"830px"} display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop={"100px"} marginBottom={"100px"} padding={"10px"}>
                <Typography textAlign="left" sx={{color: WHITE_COLOR, width: "100%", maxWidth: "830px"}} variant={isMobile ? "h4" : "h2"}>Community Owned</Typography>
                <Typography textAlign="right" sx={{color: CONTRAST_COLOR, width: "100%", maxWidth: "830px"}} variant={isMobile ? "h4" : "h2"}>Lending Marketplaces</Typography>
            </Grid>
            <Grid xs={12} display="flex" height="100%" justifyContent="center" alignItems="center" width={"100%"} padding={"10px"}>
                <Grid xs={7} height="100%" display="flex" justifyContent="start" alignItems="center" flexDirection="column">
                    <Grid height="50%" display="flex" justifyContent="start" alignItems="center" flexDirection="column">
                        <Typography textAlign="left" sx={{color: WHITE_COLOR, maxWidth: "425px", marginBottom: "20px"}} variant={isMobile ? "h5" : "h4"}>
                            Receive loans backed by crypto assets.
                        </Typography>
                        <Typography textAlign="left" sx={{color: WHITE_COLOR, maxWidth: "425px", marginBottom: "20px"}} variant={isMobile ? "h5" : "h4"}>
                            Earn interest by lending to borrowers.
                        </Typography>
                        <Grid xs={12} display="flex" justifyContent="left" alignItems="center" width="100%">
                            <Button variant="contained" style={{backgroundColor: "#1390ff", color: WHITE_COLOR, width: "90%" }} onClick={() => navigate(ROUTES.daos)}>
                                Join A DAO
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={4} display="flex" justifyContent="right" alignItems="center" flexDirection="column">
                    <Grid xs={12} height="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="100%">
                        <img src="PDAO-screenshot.jpeg" alt="Personal DAO Logo" style={{ height: isMobile ? "220px" : "360px", borderRadius: "10px", border: `solid ${WHITE_COLOR}`}} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginTop={"70px"}>
                <Paper sx={{ padding: "10px", backgroundColor: 'rgba(10, 10, 10, .2)', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Typography textAlign="center" sx={{color: WHITE_COLOR, padding: "10px"}}>
                        Personal DAO is a turn-key DAO solution that allows end-users to create a DAO in minutes with no technical expertise required. 
                        These DAOs function as community-driven capital allocation platforms, where users can lend and borrow assets, crowdfund projects, and more. 
                        Each Respective Personal DAO is governed by the community that populates it and features the ability to create and vote on proposals. 
                        Proposals types range from making requests for loans to changing updating the DAO's code. The Personal DAO Protocol is built 100% on the 
                        Internet Computer Protocol Blockchain and is fully open-source. 
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default GreetingSection;