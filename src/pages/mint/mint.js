import React from 'react'
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import { styled } from '@mui/material/styles';
import Connect from "./ModalCom";

const Containertag = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(5),
    display: "flex",
    background: "red",
    justifyContent: "center", alignItems: "center"
}));
const Mint = () => {

    return (
        <Containertag sx={{ height: "100%" }}>
            <Container maxWidth="md" sx={{ background: "red" }}>
                <Grid className="mintGrid" sx={{ background: "#858585", padding: "20px 15px 20px 15px", display: "flex", borderRadius: 0 }}>
                    <Connect></Connect>
                </Grid>
            </Container>
        </Containertag>

    );
}
export default Mint;