// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address


import { TextField, Container } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
    return (
        <div>
            <Paper>
                <Container>

                    <div>
                        <h2>Contact Me</h2>
                    </div>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={5}>
                            <TextField required id="name outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField required id="mail outlined-basic" label="e-mail" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField fullWidth label="Message" id="message outlined-multiline-flexible " multiline maxRows={4} margin="normal" />
                    </Grid>
                    <Grid sx={{py:2}}>

                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                    </Grid>
                </Container>
            </Paper>


        </div>
    )
}