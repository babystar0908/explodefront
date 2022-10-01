import Grid from "@mui/material/Grid"
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import TwiterIcon from "@mui/icons-material/Twitter";
import Linkdin from "./../assets/image/linkdin.png";
import Link from "@mui/material/Link";
import logo from "./../assets/image/logo.png";
import logo1 from "./../assets/image/logo1.png";
import ScrollToTop from "react-scroll-up";
import Discord from "./../assets/image/discord.png"
import Opensea from "./../assets/image/opensea.svg"
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const Graphic = styled(Typography)(({ theme }) => ({
    fontSize: "17px", padding: "0px",
    fontWeight: "bold",
}));
const CusScroll = styled(Typography)(({ theme }) => ({
    display: "block",
    fontSize: "70px",
    transform: "rotate(315deg)",
}));

const Footer = () => {
    const matches = useMediaQuery ('(min-width:768px)');
    const history = useNavigate()
    return (

        <Grid className="footer" container sx={{ padding:"10px", position:"relative", background:"black", display:"flex", justifyContent:"center"}}>
            <Grid sx={{borderTop: "0.5px solid #fff", marginLeft: "40px", marginRight: "40px", marginTop:" 100px"}}></Grid>
            <Grid container sx={{ backgroundImage: `url(${require("./../assets/image/world.png")})`, display:"flex", alignItems:"center", backgroundRepeat:"no-repeat", backgroundPosition:"center 50px", paddingTop:"80px", position:"relative", maxWidth:"1170px", padding:"30px"}}>
                <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={matches?logo:logo1} style={{ width: "25%", minWidth: "100px", maxWidth: "100%" }} alt="logo"></img>
                </Grid>
                <Grid item xs={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid>
                        <Grid item xs={12} sx={{ paddingTop: "30px", display:"grid"}}>
                            <Link target={"_blank"} href="https://www.linkedin.com/company/dogfacenft" sx={{color:"white", textDecoration:"none", display:"flex", alignItems:"center"}}><img src={Linkdin} style={{ width: "30px" }} alt="linkdin"/>&nbsp;Linkedin</Link>
                            <Link target={"_blank"} href="https://twitter.com/dogfaceNFT" sx={{ paddingTop:"5px", color:"white", textDecoration:"none", display:"flex", alignItems:"center"}}><TwiterIcon style={{ width: "30px" }} />&nbsp;Twitter</Link>
                            <Link target={"_blank"} href="https://discord.gg/dogface" sx={{ paddingTop:"5px", color:"white", textDecoration:"none", display:"flex", alignItems:"center"}}><img src={Discord} style={{width:"30px"}} alt="discord"></img>&nbsp;Discord</Link>
                            <Link target={"_blank"} href="https://opensea.io/collection/dogfacearmynft" sx={{ paddingTop:"5px", color:"white", textDecoration:"none", display:"flex", alignItems:"center"}}><img style={{width:"30px"}} src={Opensea} alt="Opensea"></img>&nbsp;Opensea</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Grid>
                        <Grid item xs={12} sx={{ paddingTop: "30px", display:"grid"}}>
                            <Link  target={""} onClick={()=>history("/terms")} sx={{ color: "white", textDecoration: "none", cursor:"pointer" }}>
                                Terms & Conditions
                            </Link>
                            <Link  target={""} onClick={()=>history("/privacy")} sx={{ paddingTop:"10px", color: "white", textDecoration: "none", cursor:"pointer" }}>
                                Privacy Policy
                            </Link>
                            <Link href="https://etherscan.io/address/0xBFcB983a6C3E392CbDdECa228854c51fBc29220a" target={"_blank"} sx={{ paddingTop:"10px", color: "white", textDecoration: "none", cursor:"pointer" }}>
                                Etherscan
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{width:"100%", borderBottom:"1px solid white", marginTop:"10px"}}></Grid>
                <Grid sx={{ width:"100%", display: "flex", justifyContent: "center", paddingTop: "30px", textAlign:"center"}}>
                    <Graphic>Copyright © 2022</Graphic>
                </Grid>
            </Grid>
            <ScrollToTop showUnder={160}>
                <CusScroll>🚀</CusScroll>
            </ScrollToTop>
        </Grid>
    )
}

export default Footer;
