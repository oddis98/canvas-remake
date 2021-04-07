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
import { makeStyles } from "@material-ui/core/styles";

import Logo from "../images/UiB_logo.png";
import Course1 from "../images/course1.jpg";

import AnnouncementIcon from "@material-ui/icons/Announcement";
import MessageIcon from "@material-ui/icons/Message";
import InboxIcon from "@material-ui/icons/Inbox";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

import TemporaryDrawer from "./Drawer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingLeft: "5vw",
    paddingTop: "5vh",
    paddingBottom: "5vh",
    marginTop: "4rem",
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
    height: "23rem",
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

export default function Course() {
  const classes = useStyles();
  return (
    <div>
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
      <Box className={classes.header}>
        <Typography variant="h3">CourseName</Typography>
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
                  <CardContent>
                    <Typography variant="h4">Upcoming assignments</Typography>
                    <Typography variant="h6">1. Low-fi prototype</Typography>
                    <p>
                      In this assignment you will make a low-fi prototype of a
                      chosen design idea.
                    </p>
                    <Divider />
                    <Typography variant="h6">2. Project Report</Typography>
                    <p>
                      In this assignment you will write a report based on your
                      low-fi prototype...
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item className={classes.cardGridItem}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h4">Recent announcements</Typography>
                    <Typography variant="h6">Digital Labs</Typography>
                    <p>
                      Due to the current situation in the world all labs will be
                      digital until further notice...
                    </p>
                    <Divider />
                    <Typography variant="h6">
                      Celebration of international women's day
                    </Typography>
                    <p>
                      The university will hold a live-stream celebrating the
                      international women's day this friday!
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
