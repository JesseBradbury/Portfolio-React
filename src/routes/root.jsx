import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'


export default function Root() {
    return (
        <>
            <Container maxWidth="md" >
                
                <Header />

                <div>
                    <Outlet />
                </div>

                {/* Import Footer */}
                <Footer />
            </Container>

        </>
    )
}