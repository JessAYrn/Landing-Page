import React from "react";
import Grid from "@mui/material/Grid";
import {  WHITE_COLOR } from "../theme";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const WhitePaper = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container display="flex" justifyContent="center" alignItems="center" height="700px" marginTop={"100px"}>
            {isMobile ? 
                <Typography textAlign="center" variant="h4" color={WHITE_COLOR}>Your web browser doesn't have a PDF plugin.
                    Instead you can <a href="personalDao.pdf" style={{color: WHITE_COLOR}}>click here to
                    view the White Paper PDF.</a>
                </Typography> : 
                <object frameborder="0" data="personalDao.pdf" type="application/pdf" height="100%" style={{color: WHITE_COLOR, width: "100%", maxWidth: "760px", borderRadius: "10px"}}>
                    <Typography textAlign="center" variant="h4" color={WHITE_COLOR}>Your web browser doesn't have a PDF plugin.
                        Instead you can <a href="personalDao.pdf" style={{color: WHITE_COLOR}}>click here to
                        view the White Paper PDF.</a>
                    </Typography>
                </object>
            }
        </Grid>
    )
}

export default WhitePaper;