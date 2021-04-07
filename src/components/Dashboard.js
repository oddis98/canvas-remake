import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import Logo from "../images/UiB_logo.png";
import Course1 from "../images/course1.jpg";
import Img1 from "../images/img1.jpg";
import Img2 from "../images/img2.jpg";
import Img3 from "../images/img3.jpg";
import Img4 from "../images/img4.jpg";
import Img5 from "../images/img5.jpg";

import TemporaryDrawer from "./Drawer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "5vw",
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
  nav: {
    backgroundColor: "#df3838",
    height: "9vh",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    "@media (max-width: 600px)": {
      width: "200px",
    },
    width: "23vw",
    padding: "1vh",
  },
  item: { flexGrow: 1 },
  button: {
    color: "#ffffff",
  },
  body: {
    "@media (max-width: 600px)": {
      paddingRight: "5vw",
      paddingLeft: "5vw",
    },
    paddingLeft: "5vw",
    paddingTop: "5vh",
  },
  card: {
    padding: "10px",
    height: "25rem",
  },
  cardGridItem: {
    "@media (max-width: 600px)": {
      maxWidth: "100vw",
    },
    margin: "1vh",
    maxWidth: "20vw",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    height: 140,
  },
  footer: {
    height: "30vh",
  },
  cardGrid: {
    "@media (max-width: 600px)": {
      width: "100vw",
    },
    width: "66vw",
  },
  list: {
    "@media (max-width: 600px)": {
      width: "100vw",
    },
    width: "10vw",
    marginRight: "3vw",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();

  const course = () => {
    history.push("/course");
  };
  return (
    <Box>
      <div className={classes.root}>
        <AppBar
          className={classes.nav}
          style={{
            position: "fixed",
          }}
        >
          <Toolbar>
            <img alt="logo" src={Logo} className={classes.logo} />
            <span className={classes.item} />
            <IconButton className={classes.button}>
              <TemporaryDrawer />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Box
        className={classes.header}
        style={{
          marginTop: "4rem",
        }}
      >
        <Typography variant="h3">Dashboard</Typography>
      </Box>
      <Divider />
      <Box className={classes.body}>
        <Grid container>
          <Grid item className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationImportantIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItem>
            </List>
          </Grid>
          <Grid item className={classes.cardGrid}>
            <Grid container className={classes.main}>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Course1} />
                    <CardContent>
                      <Typography variant="h4">PED100</Typography>
                      <Typography variant="h6">
                        Introduction to pedagogy
                      </Typography>
                      <Typography variant="body2">
                        PED100 seminars are starting in week 4! Don't forget to
                        sign up. Upcoming lecture is on january 18.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Img1} />
                    <CardContent>
                      <Typography variant="h4">KJEM100</Typography>
                      <Typography variant="h6">
                        Introduction to chemistry
                      </Typography>
                      <Typography variant="body2">
                        The labs this year will be a challenge to hold as
                        normal. We will keep you updated as we get more
                        information.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Img2} />
                    <CardContent>
                      <Typography variant="h4">JAP100</Typography>
                      <Typography variant="h6">
                        Japanese history and language
                      </Typography>
                      <Typography variant="body2">
                        We will try our best to keep the lectures physical this
                        semester. The first one will be held at the faculty of
                        law on january 20.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Img3} />
                    <CardContent>
                      <Typography variant="h4">INFO263</Typography>
                      <Typography variant="h6">
                        Interaction design & Prototyping
                      </Typography>
                      <Typography variant="body2">
                        The lab signup starts on january 24 at 14:00. Maximum 3
                        people per group. First lecture will be held january 19
                        at 10:00.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Img4} />
                    <CardContent>
                      <Typography variant="h4">INFO215</Typography>
                      <Typography variant="h6">Web Science</Typography>
                      <Typography variant="body2">
                        INFO215's first lecture will be held on the 28. of
                        january. We will come back to you in regards to the
                        labs.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardActionArea onClick={course}>
                    <CardMedia className={classes.media} image={Img5} />
                    <CardContent>
                      <Typography variant="h4">INFO132</Typography>
                      <Typography variant="h6">
                        Introduction to programming
                      </Typography>
                      <Typography variant="body2">
                        INFO132 will this year be 100% digital. Chose the labs
                        that best suit your schedule. We will come back to you
                        when we have the course plan set.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton>
                      <AnnouncementIcon />
                    </IconButton>
                    <IconButton>
                      <MessageIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.footer}></Box>
    </Box>
  );
}
