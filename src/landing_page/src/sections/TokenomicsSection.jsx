import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { WHITE_COLOR } from "../theme";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Tokenomics = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container display="flex" justifyContent="center" alignItems="center" height="700px" marginTop={"100px"}>
            {isMobile ? 
                <Typography textAlign="center" variant="h4" color={WHITE_COLOR}>Your web browser doesn't have a PDF plugin.
                    Instead you can <a href="tokenomics.pdf" style={{color: WHITE_COLOR}}>click here to
                    view the Tokenomics PDF.</a>
                </Typography>
             : 
                <object frameborder="0" data="tokenomics.pdf" type="application/pdf" height="100%" style={{color: WHITE_COLOR, width: "100%", maxWidth: "760px", borderRadius: "10px"}}>
                    <Typography textAlign="center" variant="h4" color={WHITE_COLOR}>Your web browser doesn't have a PDF plugin.
                        Instead you can <a href="tokenomics.pdf" style={{color: WHITE_COLOR}}>click here to
                        view the Tokenomics PDF.</a>
                    </Typography>
                </object>
            }
        </Grid>
    )
}

export default Tokenomics;