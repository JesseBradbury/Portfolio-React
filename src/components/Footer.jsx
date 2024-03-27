// This will contain links to my LinkedIn, GitHub, and a link to another social ? :( 
import { Container } from "@mui/material"
import { Link } from "react-router-dom"

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';




function Footer() {
    return (
        <Container maxWidth="sm">
            <Box sx={{ p: 2 }}>

                <Grid container spacing={2} sx={{ py: 2 }}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">

                        <Link
                            style={{ fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "gray" }}
                            to="https://www.linkedin.com/in/jessebradbury/" >LinkedIn</Link>

                    </Grid>

                    <Grid xs display="flex" justifyContent="center" alignItems="center">

                        <Link style={{ fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "gray" }} to="https://github.com/JesseBradbury" >GitHub</Link>

                    </Grid>
                </Grid>

            </Box>

        </Container>
    )
}

export default Footer