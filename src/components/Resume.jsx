import { Paper } from "@mui/material"
import { Box } from "@mui/material"
import { Link } from "react-router-dom"


export default function Resume() {
    return (
        <Paper>
            <Box>
                <h2>Jesse Brabdury</h2>
                <p>Skills list</p>
                <Link 
                        style={{fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "blue" }} 
                        to="https://www.linkedin.com/in/jessebradbury/" >Check out my Resume</Link>

            </Box>


        </Paper>
    )
}