import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ** Declare Theme Provider
const MuiThemeProvider = ({ children }) => {
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#2283f6'
            },
            secondary: {
                main: '#ed1d49'
            },
            background: {
                paper: '#111',
                default: 'red'
            },
            text: {
                primary: '#fff',
                secondary: '#55657e'
            },
            divider: '#55657e26'
        },
        shape: {
            borderRadius: 8
        },
        Typography: {
            fontFamily: "'Poppins', sans-serif, 'BebasNeueBold'",
            color: "white", fontSize: "17px",

            // padding: theme.spacing(1),
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeProvider;
