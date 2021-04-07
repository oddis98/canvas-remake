import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  button: {
    color: "#ffffff",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (e) => (
    <List component="nav" className={classes.list}>
      <ListItem button onClick={home}>
        <ListItemIcon>
          <HomeRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SchoolRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <GroupRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItem>
    </List>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            className={classes.button}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
