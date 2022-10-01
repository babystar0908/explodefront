import Wrapper from './Wrapper';
import { Outlet } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const MainLayout = () => (
    <Grid sx={{ height: "100%" }} >
        <Grid item sx={{ width: "100%", height: "100%", position: "relative" }} >
            <Wrapper sx={{ height: "100%" }}>
                <Outlet />
            </Wrapper>
        </Grid>
    </Grid>
);

export default MainLayout;
