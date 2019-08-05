import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Box } from "@material-ui/core";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Box display="flex">
        <Box m={2}>
          <Link to="/home">Home</Link>
        </Box>
        <Box m={2}>
          <Link to="/movies">movies</Link>
        </Box>
      </Box>

      <Route exact path="/home" component={Home} />
    </Router>
  );
}
export default App;
