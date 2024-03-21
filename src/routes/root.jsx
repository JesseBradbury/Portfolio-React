import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Button from '@mui/material/Button';
import Header from '../components/Header.jsx'

export default function Root() {
    return (
        <>
            <Container maxWidth="md" >
                {/* Import Header */}
                <Header />

                <div>
                    <Outlet />
                    <Button variant="contained">Hello world</Button>
                </div>

                {/* Import Footer */}
            </Container>

        </>
    )
}