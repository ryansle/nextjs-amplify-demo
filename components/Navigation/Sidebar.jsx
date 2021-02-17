import React from "react";

// Components
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import { Dashboard, DynamicFeed, Lock } from "@material-ui/icons";
import Link from "next/link";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { routes } from "../../utils/routing";

const Sidebar = ({ selected, shrink }) => {
  // Styling
  const classes = useStyles();
  const mobileScreen = useMediaQuery("(max-width: 585px)");

  const renderIcon = (title, path) => {
    switch (title) {
      case "Dashboard":
        return (
          <Dashboard className={selected === "/" ? classes.selectedIcon : ""} />
        );
      case "Dynamic Routes":
        return (
          <DynamicFeed
            className={selected.includes(path) ? classes.selectedIcon : ""}
          />
        );
      case "Protected Routes":
        return (
          <Lock
            className={selected.includes(path) ? classes.selectedIcon : ""}
          />
        );
      default:
        return;
    }
  };

  return (
    <List component="nav">
      {routes.map((route) => (
        <Link key={route.title} href={route.path}>
          <ListItem
            className={
              route.path === selected
                ? !shrink
                  ? mobileScreen
                    ? classes.selectedSidebarMobile
                    : classes.selectedMobile
                  : classes.selected
                : ""
            }
            button
          >
            <ListItemIcon>{renderIcon(route.title, route.path)}</ListItemIcon>
            <ListItemText
              className={route.path === selected ? classes.selectedText : ""}
              primary={route.title}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

const useStyles = makeStyles(() => ({
  selected: {
    backgroundColor: "#E0E9EC",
    borderRadius: 4,
    width: "95%",
    height: 48,
    marginLeft: 6,
  },
  selectedMobile: {
    backgroundColor: "#E0E9EC",
    borderRadius: 4,
    width: "81%",
    height: 48,
    margin: "0px 6px 0px 6px",
  },
  selectedSidebarMobile: {
    backgroundColor: "#E0E9EC",
    borderRadius: 4,
    width: "95%",
    height: 48,
    margin: "0px 6px 0px 6px",
  },
  selectedIcon: {
    marginLeft: -6,
    color: "#094A64",
  },
  selectedText: {
    color: "#094A64",
    margin: -6,
  },
}));

export default Sidebar;
