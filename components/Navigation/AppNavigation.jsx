import React, { useState, useEffect } from "react";

// Components
import {
  Drawer,
  CssBaseline,
  Divider,
  useMediaQuery,
  SwipeableDrawer,
} from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";

// Utilities
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import clsx from "clsx";

const sidebarWidth = 256;

const AppNavigation = ({ children }) => {
  // Styles
  const classes = useStyles();
  const theme = useTheme();
  const tabletScreen = useMediaQuery("(max-width: 1400px)");
  const phoneScreen = useMediaQuery("(max-width: 585px)");

  // Routing
  const router = useRouter();
  const path = router.pathname;

  // Hooks
  const [open, setOpen] = useState(tabletScreen ? false : true);
  const [show, setShow] = useState(phoneScreen ? false : true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMobileDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Open/close sidebar when page grows and shrinks to tablet sizes
  useEffect(() => {
    if (tabletScreen) setOpen(false);
    else setOpen(true);
  }, [tabletScreen]);

  // Hide/show the big sidebar when the page grows and shrinks to phone size
  useEffect(() => {
    if (phoneScreen) setShow(false);
    else setShow(true);
  }, [phoneScreen]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawer={
          phoneScreen ? handleMobileDrawerToggle : handleDrawerToggle
        }
      />

      {show ? (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <Sidebar selected={path} shrink={open} />
        </Drawer>
      ) : (
        <SwipeableDrawer
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onOpen={handleMobileDrawerToggle}
          onClose={handleMobileDrawerToggle}
          classes={{
            paper: classes.drawerOpen,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          <Sidebar selected={path} />
        </SwipeableDrawer>
      )}

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: sidebarWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: sidebarWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 57,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: "50px 8vw 0px 8vw",
  },
}));

export default AppNavigation;
