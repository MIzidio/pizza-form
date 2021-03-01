import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import { BrowserRouter as Router } from "react-router-dom";

createStore({
  pizza: {
    size: '',
    border: '',
    taste: '',
    points: 0
  }
})

ReactDOM.render(
  <>
    <CssBaseline />
    <StateMachineProvider>
      <DevTool />
      <Container maxWidth="xl">
        <h1>Monte sua pizza</h1>

        <Router>
          <App />
        </Router>
      </Container>
    </StateMachineProvider>
  </>,
  document.getElementById("root")
);