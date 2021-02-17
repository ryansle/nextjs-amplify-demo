import React from "react";

// Components
import { Typography } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";

const ProtectedRoutes = () => {
  return (
    <AppNavigation>
      <Typography variant="h3">Protected Routes</Typography>
    </AppNavigation>
  );
};

export default ProtectedRoutes;
