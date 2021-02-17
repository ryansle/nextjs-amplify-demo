import React from "react";

// Components
import { ThemeProvider } from "@material-ui/core";

// Utilities
import { createMuiTheme } from "@material-ui/core/styles";
import '../styles/globals.css'

const theme = createMuiTheme();

theme.typography.body2 = {
  fontSize: "20px",
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>    
  );
};

export default MyApp;
