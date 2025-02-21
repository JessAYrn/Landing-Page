import React from "react";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CONTRAST_COLOR, BACKGROUND_COLOR } from "./theme";
import { Typography } from "@mui/material";

const AccordionField = (props) => {
    const {children, title, subtitle, sx, defaultComponent} = props;

  return (
    <Grid xs={12} width={"100%"} color={"primary"} sx={sx}>
        <Accordion color="primary">
            <AccordionSummary
                color='primary'
                expandIcon={<ExpandMoreIcon sx={{color: CONTRAST_COLOR}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{width: '100%', display: "flex", justifyContent: "left", alignItems:"center", backgroundColor: BACKGROUND_COLOR}}
            >
                {title && <Typography width={"50%"} sx={{color: CONTRAST_COLOR}} display={"flex"} justifyContent={"left"} alignItems={"center"}>{title}</Typography>}
                {subtitle && <Typography width={"50%"} color={'primary'} display={"flex"} justifyContent={"right"} alignItems={"center"}>{subtitle}</Typography>}
            </AccordionSummary>
            <AccordionDetails sx={{display: "flex", flexDirection: "column", width:"100%", justifyContent:"center", alignItems:"center", padding:"0px", backgroundColor: BACKGROUND_COLOR}}>
                {!!children.length ? children : defaultComponent}
            </AccordionDetails>
        </Accordion>
    </Grid>
  );
}

export default AccordionField;