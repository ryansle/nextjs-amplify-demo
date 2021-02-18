import React, { useState, useEffect } from "react";

// Components
import { Grid } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";
import SignUp from "../components/Authentication/SignUp";
import ConfirmAccount from "../components/Authentication/ConfirmAccount";

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: "+1",
};

const SignUpPage = ({ router }) => {
  const [authState, setAuthState] = useState("signUp");
  const [form, setForm] = useState(initialState);
  
  return (
    <AppNavigation hideSidebar width="full" maxWidth="1280px" mx="auto">
      <Grid container justify="center" alignItems="center"> 
        {
          authState === "signUp" && 
            <SignUp 
              form={form} 
              setForm={setForm} 
              setAuthState={setAuthState} 
            />
        }
        {
          authState === "confirmAccount" && 
            <ConfirmAccount username={form.username} />
        }
      </Grid>
    </AppNavigation>
  );
};

export default SignUpPage;
