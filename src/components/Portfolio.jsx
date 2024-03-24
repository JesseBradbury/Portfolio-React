// This will contain cards of all my projects I want displayed on my GitHub. 
import * as React from 'react';
import { Container } from '@mui/material';
// import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
// import { Item } from '@mui/material';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectData = [
    {
        title: "Project 1",
        description: "This is a description of my prjoect",
        picture: "reference to a picture",
        githubUrl: "www.github.com",
        liveUrl: "www.github.com",
    },
    {
        title: "Project 2",
        description: "This is a description of my prjoect",
        picture: "reference to a picture",
        githubUrl: "www.github.com",
        liveUrl: "www.github.com",
    },
    {
        title: "Project 3",
        description: "This is a description of my prjoect",
        picture: "reference to a picture",
        githubUrl: "www.github.com",
        liveUrl: "www.github.com",
    }
]

export default function MediaCard() {
    return (
        <Container maxWidth="md" >
            <div>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid xs={12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>

                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://fakeimg.pl/300x200"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Project 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This is a description of the project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">GitHub</Button>
                                <Button size="small">Live Application</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>

                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://fakeimg.pl/300x200"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Project 2
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This is a description of the project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">GitHub</Button>
                                <Button size="small">Live Application</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>

                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://fakeimg.pl/300x200"
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Project 3
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        This is a description of the project
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">GitHub</Button>
                                <Button size="small">Live Application</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}



// export default function Portfolio() {
//     return (
//         <div>
//             <h2> Portfolio</h2>
//             <p>{ProjectData.title}</p>

//         </div>
//     )
// }