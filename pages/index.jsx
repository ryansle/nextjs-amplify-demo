import React from "react";

// Components
import { Typography } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";

const Dashboard = () => {
  return (
    <AppNavigation>
      <Typography variant="h3">Dashboard</Typography>
    </AppNavigation>
  );
};

export default Dashboard;
