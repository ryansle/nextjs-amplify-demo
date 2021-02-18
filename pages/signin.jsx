import React, { useState } from "react";

// Components
import { Grid } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";
import SignIn from "../components/Authentication/SignIn";

const initialState = {
  username: "",
  password: "",
};

const SignInPage = ({ }) => {
  const [authState, setAuthState] = useState("signIn");
  const [form, setForm] = useState(initialState);

  return (
    <AppNavigation hideSidebar width="full" maxWidth="1280px" mx="auto">
      <Grid container justify="center" alignItems="center"> 
        {
          authState === "signIn" && 
            <SignIn 
              form={form} 
              setForm={setForm} 
              setAuthState={setAuthState} 
            />
        }
      </Grid>
    </AppNavigation>
  );
};

export default SignInPage;
