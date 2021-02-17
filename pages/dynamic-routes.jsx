import React from "react";

// Components
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import AppNavigation from "../components/Navigation/AppNavigation";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

// Content
import { cards } from "../content/dynamic-route-cards";

const DynamicRoutes = () => {
  const classes = useStyles();

  return (
    <AppNavigation>
      <Typography className={classes.title} variant="h3">
        Dynamic Routes
      </Typography>
      <Typography variant="body2">
        These are dynamic routes. Next.js utilizes server-side rendering in its
        pages and allows you to do <b>initial data population</b>, which means
        sending the page with the data already populated from the server. This
        is especially useful for SEO. To enable this server-side rendering,
        Next.js provides a function called <code>getInitialProps().</code>
      </Typography>
      <br /> <br />
      <Typography variant="body2">
        Let's start with an example. Within the Cardholder Portal, which
        utilized create-react-app's client-side rendering, one of the problems
        we faced was rendering in dynamic pages for merchants and their awards,
        sponsors and their details, etc. The cardholder portal didn't allow
        users to navigate directly to pages like
        "cardholderportal.com/sponsors/ryan-le", because populating these pages
        happened client-side and was dependent on the prop pass from the
        "/sponsors" route.
      </Typography>
      <br /> <br />
      <Typography variant="body2">
        Next.js solves that problem. Check it out for yourself by clicking any
        of the links below.
      </Typography>
      <br /> <br />
      <Grid container justify="space-between">
        {cards.map((card) => (
          <Link key={card.id} href={`/dynamic-routes/${card.id}`}>
            <Card className={classes.card} variant="outlined">
              <CardContent>
                <Typography variant="h5">{card.title}</Typography>
                <br />
                <Typography variant="body1">{card.description}</Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </AppNavigation>
  );
};

const useStyles = makeStyles(() => ({
  title: {
    margin: "0px 0px 30px 0px",
  },
  card: {
    width: "30%",
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
  },
}));

export default DynamicRoutes;
