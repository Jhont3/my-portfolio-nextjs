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
        <Grid container xs={12} sm={8} sx={{ paddingLeft: 10 }}>
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

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sm={5} sx={{ mt: "10px" }}>
              Hello, my name is <strong>Jhonatan Escobar</strong>, I am a
              software programmer from Colombia. I am a dedicated and adaptable
              person who is always trying to improve myself every day, hoping to
              go deeper in the frontend area. I hope you could check my resume on my
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
              I had knowledge and a <strong>Fullstack</strong> tech pool, but I could
              go deep into testing if I had the opportunity. I was a
              professional in another field with some years of experience and
              recommendations from my previous jobs where I learn how to manage
              clients and staff.
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h1" component="h1">
            Tech pool
          </Typography>
          <Divider variant="inset" sx={{ width: "60%", alignSelf: "center" }} />

          <Grid item xs={12} sm={4}>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip label="React JS / TS" />
                <Chip color="secondary" label="MySQL" />
                <Chip label="MongoDb" />
              </Stack>
            </Box>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip color="secondary" label="NodeJs Express" />
                <Chip label="Java Spring" />
                <Chip color="secondary" label="Jest" />
              </Stack>
            </Box>
            <Box sx={{ my: 2 }}>
              <Stack direction="row" spacing={1}>
                <Chip label="Aws basics" />
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
                secondary="React Native, GraphQl, C# / .Net, NextJs"
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
                secondary="PostgresQl, Apollo, Flutter, Vue, SQL Server, Azure"
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
                Games Developer, Ki5 Studios - Solitaire Galaxy, June 2023 -
                July 2023
              </strong>
            </Typography>
            <Divider variant="inset" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Participate in solving application features in Unity, collaborate
              and be co-responsible for implementation of monetization and ad
              management assets. Implement sub interfaces for the game according
              to guidelines.
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
              Responsible for the design and development of the website. Adapted
              Figma design to React components. Implementing events,
              interactions, animations and error handling in the FrontEnd. I
              contributed to database design and implementation using MySQL
              Workbench in the backend. Creating a REST API with validation in
              Postman, using Spring, Hibernate and JWT for security. In
              addition, manual, smoke and regression tests and subsequent
              implementation of automated tests with SeleniumIDE.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
