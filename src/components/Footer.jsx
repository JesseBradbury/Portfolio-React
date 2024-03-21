// This will contain links to my LinkedIn, GitHub, and a link to another social ? :( 
import { Container } from "@mui/material"
import { Link } from "react-router-dom"

import Grid from '@mui/material/Unstable_Grid2';




function Footer() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid xs display="flex" justifyContent="center" alignItems="center">

                    <Link 
                        style={{fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "blue" }} 
                        to="https://www.linkedin.com/in/jessebradbury/" >LinkedIn</Link>

                </Grid>

                <Grid xs display="flex" justifyContent="center" alignItems="center">

                    <Link style={{fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "blue" }}  to="https://github.com/JesseBradbury" >GitHub</Link>

                </Grid>
            </Grid>


        </Container>
    )
}

export default Footer