import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


export default function Root() {
    return (
        <>
        <ThemeProvider theme={theme}>

            <Container maxWidth="md" >
                
                <Header />

                <Box sx={{ p: 2 }}>
                    <Outlet />
                </Box>

                {/* Import Footer */}
                <Footer />
            </Container>

        </ThemeProvider>
        </>
    )
}