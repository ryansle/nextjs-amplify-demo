import React, { useState } from "react";

// Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as Hamburger, MoreVert } from "@material-ui/icons";
import Link from "next/link";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import MobileHeaderMenu from "./MobileHeaderMenu";

const Header = ({ handleDrawer }) => {
  const classes = useStyles();
  const phoneScreen = useMediaQuery("(max-width: 600px)");

  const [anchorEl, setAnchorEl] = useState(null);

  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar postion="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawer}
          edge="start"
          className={classes.menuButton}
          aria-label="Menu"
        >
          <Hamburger />
        </IconButton>
        {/* <img src={logo} width={150} height={50} alt="Logo" /> */}
        <div className={classes.grow} />

        {phoneScreen ? (
          <IconButton
            color="inherit"
            onClick={openMobileMenu}
            aria-label="Show Mobile Menu"
          >
            <MoreVert />
          </IconButton>
        ) : (
          <>
            <Link href="/signin">
              <Button variant="contained">Login</Button>
            </Link>
          </>
        )}
      </Toolbar>

      <MobileHeaderMenu anchor={anchorEl} onClose={closeMobileMenu} />
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#094A64",
  },
  menuButton: {
    margin: "0px 36px 0px -20px",
  },
  grow: {
    flex: 1,
  },
}));

export default Header;
