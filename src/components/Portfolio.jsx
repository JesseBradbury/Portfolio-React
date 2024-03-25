// This will contain cards of all my projects I want displayed on my GitHub. 
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// import { Item } from '@mui/material';
import Card from '@mui/material/Card';
import { Paper } from "@mui/material";
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectData = [
    {
        id: "plants",
        title: "All About Plants",
        description: "This is a description of my prjoect",
        picture: `/projects/plants.png`,
        githubUrl: "github.com/nicklearning/plant-info-project",
        liveUrl: "nicklearning.github.io/plant-info-project/",
    },
    {
        id: "2",
        title: "Project 2",
        description: "This is a description of my prjoect",
        picture: "reference to a picture",
        githubUrl: "www.github.com",
        liveUrl: "www.github.com",
    },
    {
        id: "3",
        title: "Project 3",
        description: "This is a description of my prjoect",
        picture: "reference to a picture",
        githubUrl: "www.github.com",
        liveUrl: "www.github.com",
    }
]

export default function ProjectCard() {
    return (
        <Paper>
            <h2>Portfolio</h2>
            <Container maxWidth="md">
                <Grid container rowSpacing={1} columnSpacing={2}>
                    {ProjectData.map((project) => (
                        <Grid key={project.id} xs={12} md={6}>

                            <Card sx={{ maxWidth: 345 }}>
                                {/* Future functionality for adding a link to a project page with more details */}

                                {/* <CardActionArea>
                                    <Link to={`/portfolio/${project.id}`} style={{ textDecoration: 'none' }}> */}
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={project.picture}
                                            title={project.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                    {/* </Link> */}
                                {/* </CardActionArea> */}
                                <CardActions>
                                    <Button size="small" href={`https://${project.githubUrl}`} target="_blank">GitHub</Button>
                                    <Button size="small" href={`https://${project.liveUrl}`} target="_blank">Live Application</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Paper>
    );
}





//     return (
//         <Container maxWidth="md" >
//             <div>
//                 <Grid container rowSpacing={1} columnSpacing={2}>
//                     <Grid xs={12} md={6}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>

//                                 <CardMedia
//                                     sx={{ height: 140 }}
//                                     image="https://fakeimg.pl/300x200"
//                                     title="green iguana"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         Project 1
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         This is a description of the project
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small">GitHub</Button>
//                                 <Button size="small">Live Application</Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                     <Grid xs={12} md={6}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>

//                                 <CardMedia
//                                     sx={{ height: 140 }}
//                                     image="https://fakeimg.pl/300x200"
//                                     title="green iguana"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         Project 2
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         This is a description of the project
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small">GitHub</Button>
//                                 <Button size="small">Live Application</Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                     <Grid xs={12} md={6}>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardActionArea>

//                                 <CardMedia
//                                     sx={{ height: 140 }}
//                                     image="https://fakeimg.pl/300x200"
//                                     title="green iguana"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         Project 3
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         This is a description of the project
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button size="small">GitHub</Button>
//                                 <Button size="small">Live Application</Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 </Grid>
//             </div>
//         </Container>
//     );
// }
