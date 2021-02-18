import React, { useContext } from "react";

// Components
import { Typography } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";

// Utilities
import { UserContext } from "../components/Authentication/AuthenticationProvider";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  return (
    <AppNavigation>
      <Typography variant="h3">Dashboard</Typography>
      <br />

      {user && (
        <>
          <Typography variant="h4">Welcome, {user.username}</Typography>
          <br />
          <Typography variant="body2">You are currently signed in!</Typography>
        </>
      )}

      {!user && (
        <>
          <Typography variant="body2">
            You are not signed in! Please sign in.
          </Typography>
        </>
      )}
    </AppNavigation>
  );
};

export default Dashboard;
