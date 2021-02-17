import React from "react";

// Components
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import AppNavigation from "../../components/Navigation/AppNavigation";

// Content
import content from "../../content/dynamic-content.json";

const Dynamic = (props) => {
  return (
    <AppNavigation>
      <Breadcrumbs>
        <Link href="/dynamic-routes" color="inherit">
          Dynamic Routes
        </Link>
        <Link href="#" color="textPrimary">
          {props.details.title}
        </Link>
      </Breadcrumbs>
      <br />

      <Typography variant="h3">{props.details.title}</Typography>
      <br />
      <Typography variant="body2">{props.details.description}</Typography>
    </AppNavigation>
  );
};

Dynamic.getInitialProps = ({ query }) => {
  return {
    details: content[query.id],
  };
};

export default Dynamic;
