import React, { useState } from "react";

// Components
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
} from "@material-ui/core";

// Utilities
import { Auth } from "aws-amplify";
import { makeStyles } from "@material-ui/core/styles";

const SignUp = ({ form, setForm, setAuthState }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    try {
      setLoading(true);
      const { user } = await Auth.signUp({
        username: form.username,
        password: form.password,
        attributes: {
          email: form.email,
          phone_number: form.phone,
        },
      });
      console.log(user);
      setLoading(false);
      setAuthState("confirmAccount");
    } catch (error) {
      console.log("error signing up:", error);
      setLoading(false);
    }
  };

  const updateNewUser = (e) => {
    const target = e.target.value;
    const name = e.target.name;
    setForm((details) => ({
      ...details,
      [name]: target,
    }));
  };

  return (
    <Card className={classes.signUp}>
      <CardContent>
        <Typography variant="h6">Create an account</Typography>
        <br /> <br />
        <TextField
          name="username"
          placeholder="Enter your username"
          type="username"
          onChange={updateNewUser}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <TextField
          name="password"
          placeholder="Enter your password"
          onChange={updateNewUser}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <TextField
          name="confirmPassword"
          placeholder="Confirm your password"
          onChange={updateNewUser}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <TextField
          name="email"
          placeholder="Enter your email address"
          onChange={updateNewUser}
          maxLength={30}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <TextField
          name="phone"
          type="tel"
          placeholder="Phone number"
          onChange={updateNewUser}
          fullWidth
          inputProps={{ maxLength: 12 }}
          variant="outlined"
        />
        <br /> <br />
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="body1">
            Have an account?{" "}
            {/* <Link href="/signin" color="teal.500">
              Sign In
            </Link> */}
          </Typography>
          {/* TODO: Enable button when fields are filled out, email is valid, and passwords match */}
          <Button onClick={signUp}>Create Account</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  signUp: {
    width: "40%",
  },
}));

export default SignUp;
