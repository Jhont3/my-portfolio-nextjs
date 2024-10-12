import type { NextPage } from "next";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Stack,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import WorkIcon from "@mui/icons-material/Work";
import { MainLayout } from "../../components/layouts";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const Home: NextPage = () => {
  return (
    <MainLayout
      title="About me"
      pageDescription="Information about Jhont3 development"
    >
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid container xs={12} sm={8} sx={{ paddingLeft: { xs: 2, sm: 10 } }}>
          <Grid item xs={12}>
            <Divider
              component="div"
              role="presentation"
              textAlign="left"
              sx={{ width: "90%", alignSelf: "center" }}
            >
              <Typography variant="h1" component="h1">
                About me
              </Typography>
            </Divider>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }} >
            <Grid item xs={12} sm={5} sx={{ mt: "10px" }}>
              Hello, I am <strong>Jhonatan Escobar</strong>, fullstack developer
              from Colombia specialized in the frontend area. I hope you can
              find out more on my
              <strong>
                <a
                  href="https://www.linkedin.com/in/jhonatan-escobar-uribe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  LinkedIn.
                </a>
              </strong>
            </Grid>
            <Grid item xs={12} sm={5} sx={{ mt: "10px" }}>
              Previously, I worked in another field where I gained years of
              experience with great references and developed skills in managing
              clients and teams.
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h1" component="h1">
            Tech pool
          </Typography>
          <Divider variant="inset" sx={{ width: "60%", alignSelf: "center" }} />

          <Grid item xs={12}>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip label="React" />
                <Chip color="secondary" label="MySQL" />
                <Chip label="MongoDb" />
              </Stack>
            </Box>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip color="secondary" label="Nodejs" />
                <Chip label="Java Spring" />
                <Chip color="secondary" label="Jest" />
              </Stack>
            </Box>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip label="Aws" />
                <Chip color="secondary" label="C# .Net" />
                <Chip label="Tailwind" />
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ mt: 2 }}>
          <Typography variant="h1" component="h1" textAlign="center">
            Interests
          </Typography>
          <Divider variant="inset" sx={{ width: "60%", alignSelf: "center" }} />

          <List sx={{ width: "100%", maxWidth: 360, paddingLeft: "26px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Hobbies"
                secondary="Music, Games, Walking, Trying new restaurants"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Recent Techs"
                secondary="React Native, GraphQl, Apollo, NextJs, PostgresQl"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LightbulbIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Interesting Techs"
                secondary="Angular, Flutter, Vue, SQL Server, Azure, ThreeJs"
              />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={8} sx={{ mt: 2 }}>
          <Divider
            component="div"
            role="presentation"
            textAlign="left"
            sx={{ width: "90%", alignSelf: "center" }}
          >
            <Typography variant="h1" component="h1">
              Experience
            </Typography>
          </Divider>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">
              <strong>
                Frontend Developer, Digital House - Digital Money House, June
                2024 - Oct. 2024
              </strong>
            </Typography>
            <Divider variant="inset" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              I implemented the Figma design of a virtual wallet website using
              Next.js and integrated the API provided by Digital House. The
              project was deployed on Vercel and I ensured that the requirements
              for each sprint were met through manual testing, supported by a
              Jira-based planning process.
            </Typography>
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2">
              <strong>
                FullStack Developer, Digital House - EasyCar, January 2023 -
                March 2023
              </strong>
            </Typography>
            <Divider variant="inset" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Responsible for designing and developing the website, adapting
              Figma designs into React components with events, interactions,
              animations, and error handling. Contributed to backend
              development, designing the database in MySQL and creating a REST
              API using Spring and JWT for security. Performed manual, smoke,
              and regression testing, and implemented automated tests using
              Selenium IDE.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
