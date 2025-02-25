import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { WHITE_COLOR, CONTRAST_COLOR, PAPER_COLOR } from "../theme";

const DAOS = [
    {
        url: "https://unl3b-waaaa-aaaam-ach6a-cai.icp0.io",
        founder: "https://x.com/JesseThaGreat_",
        description: "A DAO for everyone who's following Jesse's dev journey as he completes the Personal DAO Roadmap."
    },
    {
        url: "https://umj2h-4qaaa-aaaam-qb5ia-cai.icp0.io",
        founder: "https://x.com/Meta_Owl",
        description: "For the Meta Owl community to come together."
    },
    {
        url: "https://6y6vc-xyaaa-aaaao-qjv3a-cai.icp0.io",
        founder: "https://x.com/cimerino80",
        description: "para la comunidad latina."
    },
]

const DisplaySection = (props) => {

    const { url, founder, description } = props;

    return (
        <Paper sx={{ margin: "10px", borderRadius: "10px", border: `1px solid ${WHITE_COLOR}`, backgroundColor: PAPER_COLOR, width: "90%", maxWidth: "730px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Grid display="flex" width="90%" justifyContent="center" alignItems="center" padding="10px">
                <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
                    <Typography color={WHITE_COLOR} width="100%" textAlign="left">
                        Founded By: <a href={founder} style={{color: WHITE_COLOR}}>{founder}</a>
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="left" alignItems="center" flexDirection="column" width="90%" padding="10px">
                <Typography color={WHITE_COLOR} textAlign="left" width="100%">
                    {description}
                </Typography>
            </Grid>
            <Grid xs={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column" width="90%" padding="10px">
                <Button variant="contained" sx={{ backgroundColor: CONTRAST_COLOR, color: WHITE_COLOR }} onClick={() => window.open(url, "_blank")}>
                    Visit DAO
                </Button>
            </Grid>
        </Paper>
    )
}

const DaosSection = () => {

    return (
        <Grid container marginTop="100px" justifyContent="center" alignItems="center" display="flex" flexDirection="column">
            {DAOS.map((dao) => (
                <DisplaySection key={dao.url} {...dao} />
            ))}
        </Grid>
    )
}
export default DaosSection;