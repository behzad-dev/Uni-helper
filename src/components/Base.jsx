import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import InfoIcon from "@material-ui/icons/Info";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { Link } from "react-router-dom";
import history from "../apis/History";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Content from "./Content";
import Content2 from "./Content2";

import AboutUs from "./AboutUs";
import Login from "./Login";
import Createdata from "./Createdata";
import ScoreCalculator from "./ScoreCalculator";
import Filter1Icon from "@material-ui/icons/Filter1";
import Popover from "@material-ui/core/Popover";
import AlarmIcon from "@material-ui/icons/Alarm";
import SchoolIcon from "@material-ui/icons/School";
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBarDrawer: {
    [theme.breakpoints.up("xs")]: {
      width: `calc( ${drawerWidth}px)`,
      marginRight: `calc(100% - ${drawerWidth}px)`,
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function Base(props) {
  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
    // className={classes.root}
    // style={{ position: "fixed", backgroundColor: "#962f90" }}
    // style={{ backgroundColor: "" }}
    >
      <AppBar
        style={
          {
            // backgroundColor: "#001336",
            // height: "40%",
          }
        }
        position="fixed"
        className={classes.appBarDrawer}
        // className={classes.appBarDrawer}
      >
        <Toolbar>
          <SchoolIcon />
          Uni-Helper
        </Toolbar>
      </AppBar>
      {/* <main className={classes.content}> */}
      <main>
        <div className={classes.toolbar} />
        {/* <Divider /> */}
        <List>
          <ListItem button component={Link} to={"/Content"}>
            <ListItemIcon>
              <AssignmentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"University List"} />
          </ListItem>
          <ListItem button component={Link} to="/ScoreCalculator">
            <ListItemIcon>
              <Filter1Icon />
            </ListItemIcon>
            <ListItemText primary={"Score Calculator"} />
          </ListItem>
          <ListItem
            button
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <ListItemIcon>
              <AlarmIcon />
            </ListItemIcon>
            <ListItemText primary={"Documents Confirmations"} />
          </ListItem>

          <ListItem button component={Link} to="/About-us">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"About us"} />
          </ListItem>

          <ListItem button component={Link} to="/Login">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItem>
        </List>
      </main>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        // style={{ backgroundColor: "#edebeb" }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            My data
          </Typography> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
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
      {/* here Shows Content Based on what it gets as props from App.js */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.myPage === "Content" && <Content></Content>}
        {props.myPage === "Content" && <Content2></Content2>}

        {props.myPage === "AboutUs" && <AboutUs></AboutUs>}
        {props.myPage === "Login" && <Login></Login>}
        {props.myPage === "Createdata" && <Createdata></Createdata>}
        {props.myPage === "ScoreCalculator" && (
          <ScoreCalculator></ScoreCalculator>
        )}

        {/* <Content></Content> */}
      </main>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          Notify You When Document Confirmation is available so you can reserve
          appointment ( This feature will be added if there be a demand ){" "}
        </Typography>

        <Typography>
          در صورتی که وقت تایید مدارک باز شود به شما اطلاع میدهد (این قابلیت در
          صورت درخواست عمومی به سایت اضافه خواهد شد){" "}
        </Typography>
      </Popover>
    </div>
  );
}

Base.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Base;
