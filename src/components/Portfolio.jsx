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
        id: "Plants",
        title: "All About Plants",
        description: "This is a description of my prjoect",
        picture: `/projects/plants.png`,
        githubUrl: "github.com/nicklearning/plant-info-project",
        liveUrl: "nicklearning.github.io/plant-info-project/",
    },
    {
        id: "Slinky",
        title: "Slinkly World",
        description: "This is a description of my prjoect",
        picture: `/projects/slinky2.png`,
        githubUrl: "github.com/JesseBradbury/Slinky-Project",
        liveUrl: "slinkyworld-4cca5764620e.herokuapp.com",
    },
    {
        id: "EmployeeSQLDb",
        title: "SQL Employee Database",
        description: "This is a description of my project",
        picture: `/projects/employee.png`,
        githubUrl: "github.com/JesseBradbury/SQL-Employee-Tracker",
        liveUrl: "drive.google.com/file/d/1XsMCYRmnw50NkaLL_iGuNyXui3OJgWNM/view",
    },
    {
        id: "StoreSQLDb",
        title: "SQL Online Store Backend",
        description: "This is a description of my prjoect",
        picture: `/projects/store.png`,
        githubUrl: "github.com/JesseBradbury/e-commerce-back-end",
        liveUrl: "drive.google.com/file/d/1FF2ldrJMYF1dmnvlftoKoNbggUsHE8yB/view",
    },
    {
        id: "socialMongoDb",
        title: "Social Media MongoDb",
        description: "This is a description of my prjoect",
        picture: `/projects/socials.png`,
        githubUrl: "github.com/JesseBradbury/Social-Network-API-mongodb",
        liveUrl: "slinkyworld-4cca5764620e.herokuapp.com",
    },
    {
        id: "Schedule",
        title: "Schedule App",
        description: "This is a description of my prjoect",
        picture: `/projects/schedule.png`,
        githubUrl: "github.com/JesseBradbury/Work-Day-Scheduler?tab=readme-ov-file",
        liveUrl: "jessebradbury.github.io/Work-Day-Scheduler/",
    },
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
