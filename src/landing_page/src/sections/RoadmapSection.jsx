import React from "react";
import { Grid, Typography } from "@mui/material";
import AccordionField from "../AccordianField";
import { WHITE_COLOR } from "../theme";

const RoadmapSection = () => {
    return (
        <Grid container marginTop={"130px"} marginBottom={"130px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Grid xs={12} md={9} width={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                <Typography width={"100%"}  textAlign={"left"} variant="h2" color="primary" marginBottom={"30px"}>Roadmap</Typography>
                <AccordionField 
                title="Redesign UI" 
                subtitle="(completed) Q1 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Redesign the user interface to enhance user experience, making it more intuitive and visually appealing. 
                        We’ll be creating a “simple mode” setting for users unfamiliar with Web3. When simple mode is activated, 
                        all terms and concepts requiring familiarity with blockchain technology and/or the Internet Computer will be abstracted away from the User Experience. 
                        This will enable DAO founders to easily onboard people from Web2.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="ICRC Support within P2P lending protocols" 
                subtitle="Q2 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Integrate support for the Internet Computer's ICRC token standard across all features, ensuring seamless token transactions and interoperability. 
                        This will allow users to conduct collateralized P2P lending using ckBTC, ckETH, ckUSDC, and any other ICRC token.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="No-code DAO Vending Machine Solution" 
                subtitle="Q2 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        This will allow end-users to purchase their own Personal DAOs using $DAO token. Upon release of this product, 
                        all participants of the SNS sale will be airdropped enough $DAO token to purchase their own Personal DAO.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="Push Notifications" 
                subtitle="Q3 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        This will allow users to receive push notifications when new proposals are created, Cycles balances run low, new versions Are made available (and more) for users who install the Personal DAO Progressive Web App to their local devices.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="Analytics" 
                subtitle="Q3 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        This will allow users to better track their assets, debts, profits, deposits and withdrawals.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="DAO-Controlled Liquidity Pools" 
                subtitle="Q3 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Integrate DEXs with Personal DAO treasuries, allowing Personal DAOs to service DEXs as decentralized liquidity providers while offering an additional revenue source for Personal DAOs
                    </Typography>
                ]}
                />
                <AccordionField 
                title="Data Storage for Individuals and communities" 
                subtitle="Q4 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Implement secure data storage solutions for individual users, allowing them to store personal information, files, and assets safely. 
                        Develop and integrate data storage solutions for community use, facilitating shared access to important documents and collective resources.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="DAO-Controlled AI Small Language Models" 
                subtitle="Q4 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Develop an AI model controlled by the DAO where it may be trained and monetized, adding an additional source of revenue for DAO communities.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="Cycles Exchange Service" 
                subtitle="Q4 2025" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        Cycles Exchange Service: Implement a service to facilitate the exchange of cycles, the computational unit used on the Internet Computer.  
                        This will allow Personal DAO communities to purchase cyles at market rate using $DAO token.
                    </Typography>
                ]}
                />
                <AccordionField 
                title="BTC ⇔ ckBTC bridge" 
                subtitle="Q1 2026" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        enable seamless conversion between Bitcoin (BTC) and Chain Key Bitcoin (ckBTC).
                    </Typography>
                ]}
                />
                <AccordionField 
                title="ETH ⇔ ckETH bridge" 
                subtitle="Q1 2026" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        enable seamless conversion between Ethereum (ETH) and Chain Key Ethereum (ckETH).
                    </Typography>
                ]}
                />
                <AccordionField 
                title="USDC ⇔ ckUSDC bridge" 
                subtitle="Q1 2026" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        enable seamless conversion between USD Coin (USDC) and Chain Key USD Coin (ckUSDC).
                    </Typography>
                ]}
                />
                <AccordionField 
                title="USDT ⇔ ckUSDT bridge" 
                subtitle="Q1 2026" 
                sx={{ borderBottom: `solid 1px ${WHITE_COLOR}`}} 
                children={[
                    <Typography width={"97%"} textAlign={"left"} paddingBottom={"20px"}>
                        enable seamless conversion between USD Coin (USDT) and Chain Key USD Coin (ckUSDT).
                    </Typography>
                ]}
                />
        
            </Grid>
        </Grid>
    )
}   

export default RoadmapSection;