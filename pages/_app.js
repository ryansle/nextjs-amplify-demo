import React from "react";

// Components
import { ThemeProvider } from "@material-ui/core";
import { AuthenticationProvider } from "../components/Authentication/AuthenticationProvider";

// Utilities
import { createMuiTheme } from "@material-ui/core/styles";
import Amplify from "aws-amplify";
import config from "../aws-exports";
import '../styles/globals.css'

const theme = createMuiTheme();

theme.typography.body2 = {
  fontSize: "20px",
}

Amplify.configure({
  ...config,
  ssr: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>
        <Component {...pageProps} />
      </AuthenticationProvider>
    </ThemeProvider>    
  );
};

export default MyApp;
