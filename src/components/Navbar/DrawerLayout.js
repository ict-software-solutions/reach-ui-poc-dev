import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../assets/images/widow.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `url(${"https://images3.alphacoders.com/100/1006696.png"})`,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  img: {
    width: 150,
    height: 160,
    marginTop: theme.spacing(-6),
    marginLeft: theme.spacing(3),
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
  },
  icon: {
    fontSize: 20,
    color: "#fff",
  },
  active: {
    background: "green",
    color: "#fff",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));

function DrawerLayout({ open, seOpen, handleDrawerToggle, container }) {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "Home",
      icon: <i class="fas fa-home"></i>,
      path: "/home",
    },
    {
      text: "About",
      icon: <i class="fas fa-user"></i>,
      path: "/about",
    },
    {
      text: "Global",
      icon: <i class="fas fa-globe"></i>,
      path: "/global",
    },
    {
      text: "Madical",
      icon: <i class="fas fa-briefcase-medical"></i>,
      path: "/madical",
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div style={{ paddingBottom: 20 }}>
        <Avatar alt="Remy Sharp" src={logo} className={classes.img} />
        <Typography variant="h6" align="center" className={classes.title}>
          Natasha romanoff
        </Typography>
        <Typography variant="body2" align="center" className={classes.subtitle}>
          natasha@gmail.com
        </Typography>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            onClick={() => {
              seOpen(false);
              history.push(item.path);
            }}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} className={classes.subtitle} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={open}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

export default DrawerLayout;
