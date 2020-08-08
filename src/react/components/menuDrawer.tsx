import React from "react";
import clsx from "clsx";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TimelineIcon from "@material-ui/icons/Timeline";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => createStyles({
  list: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  fullList: {
    width: "auto"
  }
}));

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const navigateTo = (e: React.MouseEvent<HTMLDivElement>, url: string) => {
    e.stopPropagation();
    history.push(url);
    setState({...state, left: false});
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    console.log("Toggling drawer");
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"home"} onClick={(e) => navigateTo(e, "/")}>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary={"Home"}/>
        </ListItem>
        <ListItem button key={"trades"} onClick={(e) => navigateTo(e, "/trades")}>
          <ListItemIcon>
            <AccountBalanceIcon/>
          </ListItemIcon>
          <ListItemText primary={"Trades"}/>
        </ListItem>
        <ListItem button key={"performance"} onClick={(e) => navigateTo(e, "/performance")}>
          <ListItemIcon>
            <TimelineIcon/>
          </ListItemIcon>
          <ListItemText primary={"Performance"}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button key={"profile"} onClick={(e) => navigateTo(e, "/profile")}>
          <ListItemIcon><AccountCircleIcon/></ListItemIcon>
          <ListItemText primary={"Profile"}/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <React.Fragment key={"menuExpandButton"}>
      <IconButton onClick={toggleDrawer("left", true)} edge="start" className={classes.menuButton} color="inherit"
                  aria-label="menu">
        <MenuIcon/>
      </IconButton>
      <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>
    </React.Fragment>
  );
}
