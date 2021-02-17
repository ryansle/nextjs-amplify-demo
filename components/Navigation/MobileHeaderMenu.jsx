import React from "react";

// Components
import { Menu, MenuItem, ListItemIcon } from "@material-ui/core";
import { NotificationsNone, Language, Person } from "@material-ui/icons";

const MobileHeaderMenu = ({ anchor, onClose }) => {
  return (
    <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={onClose}>
      <MenuItem>
        <ListItemIcon aria-label="Notifications">
          <NotificationsNone />
        </ListItemIcon>
        Notifications
      </MenuItem>
      <MenuItem>
        <ListItemIcon aria-label="Language">
          <Language />
        </ListItemIcon>
        Languages
      </MenuItem>
      <MenuItem>
        <ListItemIcon aria-label="My Profile">
          <Person />
        </ListItemIcon>
        Profile
      </MenuItem>
    </Menu>
  );
};

export default MobileHeaderMenu;
