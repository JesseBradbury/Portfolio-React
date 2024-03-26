// This will contain cards of all my projects I want displayed on my GitHub. 
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
// import { Item } from '@mui/material';
import Card from '@mui/material/Card';
import { Paper, Box } from "@mui/material";
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectData = [
    {
        id: "Slinky",
        title: "Slinkly World",
        description: "Slinky world is a full stack website for slinky enthusiests to share their favorite locations to use a slinky. This project is a exercise in using handlebars, express routers, object relational mapping, SQL &sequilize, and Node.js.",
        picture: `/projects/slinky2.png`,
        githubUrl: "github.com/JesseBradbury/Slinky-Project",
        liveUrl: "slinkyworld-4cca5764620e.herokuapp.com",
    },
    {
        id: "Plants",
        title: "All About Plants",
        description: "This website allows you to search for plants to learn quick facts about growing them. This project is an exercise in calling and manipulating data from an API, and dynamically creating elements on our webpage using JavaScript. ",
        picture: `/projects/plants.png`,
        githubUrl: "github.com/nicklearning/plant-info-project",
        liveUrl: "nicklearning.github.io/plant-info-project/",
    },
    {
        id: "EmployeeSQLDb",
        title: "SQL Employee Database",
        description: "Employee Tracker Pro uses node and SQL to allow you to add details about employees and their roles in your company. This project is a exercise in using SQL with node.js and mySQL2. ",
        picture: `/projects/employee.png`,
        githubUrl: "github.com/JesseBradbury/SQL-Employee-Tracker",
        liveUrl: "drive.google.com/file/d/1XsMCYRmnw50NkaLL_iGuNyXui3OJgWNM/view",
    },
    {
        id: "StoreSQLDb",
        title: "SQL Online Store Backend",
        description: "This setup enables the backend routes for an e-commerce website to add new products, categories and tags to their database. This project is an exercise in using sequilize with SQL and node.js for object relational mapping.",
        picture: `/projects/store.png`,
        githubUrl: "github.com/JesseBradbury/e-commerce-back-end",
        liveUrl: "drive.google.com/file/d/1FF2ldrJMYF1dmnvlftoKoNbggUsHE8yB/view",
    },
    {
        id: "socialMongoDb",
        title: "Social Media MongoDb",
        description: "This setup enables the backend routes for an social media website to create, read, update, and delete Users, and Posts by those users. This project is a exercise in using MongoDB with Mongoose. This was practice using a NoSQL database.",
        picture: `/projects/socials.png`,
        githubUrl: "github.com/JesseBradbury/Social-Network-API-mongodb",
        liveUrl: "slinkyworld-4cca5764620e.herokuapp.com",
    },
    {
        id: "Schedule",
        title: "Schedule App",
        description: "This project allows you to record your schedule for your work day, it saves the events to your localstorage, so you can leave and come back. This project is an exercise in using the Third Party API DayJS, and implementing jQuery and Bootstrap",
        picture: `/projects/schedule.png`,
        githubUrl: "github.com/JesseBradbury/Work-Day-Scheduler?tab=readme-ov-file",
        liveUrl: "jessebradbury.github.io/Work-Day-Scheduler/",
    },
]

export default function ProjectCard() {
    return (
        <Paper>
            <Box sx={{ p: 2 }}>
                <Typography variant="h3">Portfolio</Typography>
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
            </Box>
        </Paper>
    );
}