import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function AboutMe() {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Box sx={{ p: 2 }}>

                            <h2>About Me</h2>

                            <p>
                                Welcome to my web development portfolio! I am currently enrolled in the ASU Web Development
                                Bootcamp.
                            </p>
                            <p>
                                I am an experienced teacher and technical support advisor, dedicated mentor, and passionate life long learner.
                                Currently enriching lives with Apple Retail as a Genius, I&#39;ve always been drawn to helping others use
                                innovative and exciting new technology. Recently cultivated experiences include training and employee
                                development, eLearning and instructional design, retail floor leadership, and technical hardware repair
                                training.
                            </p>
                            <p>

                                Before working in technical support I was a high school teacher where I taught computer science and
                                business courses in Mesa Arizona. I&#39;ve also taught drumline and marching band for 10+ years with
                                multiple programs across Arizona. Music and marching band taught me many valuable lessons while I was a
                                student, I&#39;m proud to be able to give back to my community and provide those memorable and positive
                                experiences for young musicians.
                            </p>
                            <p>

                                Outside of work you will find me hiking or exploring the outdoors with my family, gardening, playing a
                                round of disc golf or board games with friends.
                            </p>
                        </Box>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                            borderRadius: 1,
                            backgroundImage: `url(/images/avatar.png)`,
                            backgroundSize: 'cover',
                        }}
                    >

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}