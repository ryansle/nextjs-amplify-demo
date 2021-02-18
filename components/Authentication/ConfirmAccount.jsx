import React, { useState } from "react";

// Components
import {
  Card,
  CardContent,
  Typography,
  Button,
  Link,
  TextField,
  Grid,
} from "@material-ui/core";
import { useRouter } from "next/router";

// Utilities
import { Auth } from "aws-amplify";
import { makeStyles } from "@material-ui/core/styles";

const ConfirmAccount = ({ username }) => {
  const classes = useStyles();
  const [code, setCode] = useState("");
  const router = useRouter();

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, code);
      router.push("/signin");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  };

  const handleCodeChange = (e) => {
    const verificationCode = e.target.value;
    setCode(verificationCode);
  };

  return (
    <Card className={classes.confirm} variant="outlined">
      <CardContent>
        <Typography variant="h6">Confirm your account</Typography>
        <br /> <br />
        <TextField
          placeholder="Enter code"
          onChange={handleCodeChange}
          fullWidth
          variant="outlined"
        />
        <br /> <br />
        <Grid container justify="space-between" alignItems="center">
          <Link href="/signin">Back to Sign In</Link>
          <Button onClick={confirmSignUp}>Confirm</Button>
        </Grid>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  confirm: {
    width: "40%",
  },
}));

export default ConfirmAccount;
