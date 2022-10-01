import React from 'react'
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Graphic = styled(Typography)(({ theme }) => ({
    fontSize: "15px", padding: "0px",
    textAlign: "center",
    color: "#0a0909ab"
}));

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, minWidth: 70, }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
}

export default function ModalDemo() {


    const [progress, setProgress] = React.useState(10);
    const [videoid, setvideoid] = React.useState("");

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const currencies = [
        
        {
            value: 'USD',
            label: 'English',
        },
        {
            value: 'EUR',
            label: 'Japaniese',
        },
        {
            value: 'BTC',
            label: 'Chinese',
        }
    ];

    return (
        <Box container className="connectMint" sx={{ background: "#dddddd", width: "100%" }}>
            <Box sx={{ width: '100%', padding: "30px 30px 30px 50px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                <Grid container item sx={{ width: '100%' }}>            
                    <Grid container item sx={{ width: '100%' }}>
                        <Grid item xs={3} md={3} sx={{ display: "flex", alignItems:"center" }} >
                            <Graphic>Paste Youtube Video ID here</Graphic>
                            <ArrowRightIcon sx={{ fontSize: "3rem", fill: "#e32426" }}></ArrowRightIcon>
                        </Grid>
                        <Grid item xs={9} md={9}>
                            <FormControl sx={{ 
                                width: '100%',
                                color: "black", 
                                "& svg": {
                                    color: "#e32426",
                                    fontSize: "3rem"
                                },
                                "& .MuiOutlinedInput-input": {
                                    color: "#0a0909ab"
                                }
                            }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value={videoid}
                                    onChange={(e) => setvideoid(e.target.value)}
                                    aria-describedby="outlined-weight-helper-text"
                                    sx={{
                                        backgroundColor: "white",
                                        color: "black"
                                    }}
                                    />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item sx={{ width: '100%', marginTop: "20px" }}>
                        <Grid item xs={3} md={3} sx={{ display: "flex" }} >
                        </Grid>
                        <Grid item xs={9} md={9}>
                            <FormControl sx={{ 
                                width: '100%',
                                color: "black", 
                                "& svg": {
                                    color: "#e32426",
                                    fontSize: "3rem"
                                },
                                "& .MuiOutlinedInput-input": {
                                    color: "#0a0909ab"
                                }
                            }} variant="outlined">
                            
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="CHOOSE LANGUAGE"
                                    sx={{
                                        borderRadius: "5px",
                                        background: "white",
                                    }}
                                // value={currency}
                                // onChange={handleChange}
                                // helperText="Please select your currency"
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} md={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <Box sx={{ display: "flex", background: "#a7a7a7", padding: "10px", alignItems: "center" }} >
                        <Graphic>PROGRESS</Graphic>
                        <ArrowRightIcon sx={{ fontSize: "3rem", fill: "#e32426" }}></ArrowRightIcon>
                        <LinearProgressWithLabel value={progress} />
                    </Box>
                    <Button size='large' variant="contained" sx={{ background: "#535353", padding:"20px", fontWeight: "bold" }}>click to download</Button>
                </Grid>

            </Box>
        </Box >

    );
}
