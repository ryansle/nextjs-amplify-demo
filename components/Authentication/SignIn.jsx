import React, { useState } from "react";

// Components
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import Link from "next/link";

// Utilities
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const SignIn = ({ form, setForm }) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const updateUser = (e) => {
    const target = e.target.value;
    const name = e.target.name;
    setForm((details) => ({
      ...details,
      [name]: target,
    }));
  };

  async function signIn() {
    try {
      setLoading(true);
      await Auth.signIn(form.username, form.password);
      router.reload("");
      router.push("/");
      setLoading(false);
    } catch (error) {
      // TODO: Error handling: incorrect login
      console.log("error signing in", error);

      if (error.code === "UserNotConfirmedException") {
        Auth.resendSignUp(form.username);
        router.push(
          {
            pathname: "/signup",
            query: {
              type: "confirmAccount",
              form: JSON.stringify(form),
            },
          },
          "/signup"
        );
      }
      setLoading(false);
    }
  }

  return (
    <Card className={classes.signIn} variant="outlined">
      <CardContent>
        <Typography variant="h6">Sign in to your account</Typography>
        <br />
        <TextField
          placeholder="Enter your username"
          name="username"
          fullWidth
          variant="outlined"
          onChange={updateUser}
        />
        <br /> <br />
        <TextField
          placeholder="Enter your password"
          name="password"
          fullWidth
          variant="outlined"
          onChange={updateUser}
        />
        <br /> <br />
        <Grid container justify="space-between" alignItems="center">
          <Typography variant="body1">
            No Account? <Link href="/">Create Account</Link>
          </Typography>
          <Button onClick={signIn}>Sign In</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  signIn: {
    width: "40%",
  },
}));

export default SignIn;
