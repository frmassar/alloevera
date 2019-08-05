import React from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <div className="container">
      <Box m={8}>
        <Typography variant="h1" component="h2" gutterBottom>
          La Bible
        </Typography>
      </Box>
      <Button
        variant="outlined"
        component="span"
        size="xl"
        className={classes.button}
      >
        Trouver un film
      </Button>
    </div>
  );
}

export default Home;
