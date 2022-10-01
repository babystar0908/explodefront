import React from "react";
import { Box, Grid, item } from "@mui/material";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
      }}>
        <Box sx={{ bgcolor: 'gray', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
};

export default App;
