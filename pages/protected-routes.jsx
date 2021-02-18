import React, { useContext } from "react";

// Components
import { Typography } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";

// Utilities
import { UserContext } from "../components/Authentication/AuthenticationProvider";

const ProtectedRoutes = () => {
  const [user] = useContext(UserContext);

  return (
    <AppNavigation>
      <Typography variant="h3">Protected Routes</Typography>
      <br />

      {user && (
        <>
          <Typography variant="body2">
            Thank you for logging in, {user.username}!
          </Typography>
          <br />
          <Typography variant="body2">
            Your email address: <b>{user.attributes.email}</b>
          </Typography>
          <Typography variant="body2">
            Email verified: <b>{user.attributes.email_verified.toString()}</b>
          </Typography>
          <Typography variant="body2">
            Your phone number: <b>{user.attributes.phone_number}</b>
          </Typography>
        </>
      )}

      {!user && (
        <>
          <Typography variant="body2">
            You are not logged in. Please login to view protected information.
          </Typography>
        </>
      )}
    </AppNavigation>
  );
};

export default ProtectedRoutes;
