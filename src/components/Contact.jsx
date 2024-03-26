// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address

import React, { useState } from 'react';
import { TextField, Container } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate name and email
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!validateEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        // Proceed with form submission if all fields are valid
        if (name && validateEmail(email)) {
            console.log('Form submitted!');
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <Paper>
                <Container>

                    <div>
                        <h2>Contact Me</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={5}>
                            <TextField
                                required
                                id="name outlined-basic"
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                                helperText={nameError ? 'Name is required' : ''}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <TextField
                                required
                                id="mail outlined-basic"
                                label="e-mail"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? 'Provide a valid e-mail' : ''}
                            />
                            {/* <TextField
                                error
                                id="mail outlined-error-helper-text"
                                label="Error"
                                defaultValue="e-mail"
                                helperText="Provide valid e-mail"
                            /> */}
                        </Grid>
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            label="Message"
                            id="message outlined-multiline-flexible "
                            multiline
                            maxRows={4}
                            margin="normal"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid sx={{ py: 2 }}>

                        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Grid>
                    </form>
                </Container>
            </Paper>


        </div>
    )
}