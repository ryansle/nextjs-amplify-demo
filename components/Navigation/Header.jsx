import React, { useState, useContext } from "react";

// Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as Hamburger, MoreVert } from "@material-ui/icons";
import MobileHeaderMenu from "./MobileHeaderMenu";
import Link from "next/link";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { UserContext } from "../Authentication/AuthenticationProvider";

const Header = ({ handleDrawer }) => {
  const classes = useStyles();
  const phoneScreen = useMediaQuery("(max-width: 600px)");

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();

  const openMobileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      router.reload();
    } catch (error) {
      console.log("error signing out: ", error);
    }
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
        ) : user ? (
          <Button variant="contained" onClick={signOut}>
            Logout
          </Button>
        ) : (
          <Link href="/signin">
            <Button variant="contained">Login</Button>
          </Link>
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
