import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { BACKGROUND_COLOR } from "../theme";

const WhitePaper = () => {
    return (
        <Grid container>
            <Grid display="flex" width="100%" justifyContent="center" alignItems="center" flexDirection="column" marginTop={"130px"} height={"100vh"}>
                <iframe frameborder="0" src="assets/personalDao.pdf#toolbar=0" type="application/pdf" width="100%" height="100%" style={{maxWidth: "760px", backgroundColor: BACKGROUND_COLOR, borderRadius: "10px"}} />
            </Grid>
        </Grid>
    )
}

export default WhitePaper;