import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import PizzaBorder from "./pages/PizzaBorder";
import PizzaOfTheDay from "./pages/PizzaOfTheDay";
import PizzaSize from "./pages/PizzaSize";
import PizzaTaste from "./pages/PizzaTaste";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import FinalPizza from "./pages/FinalPizza";

const App = () => {
  return (
    <>
      <AppBar>
        <Typography variant='h3' align='center'>Monte Sua Pizza</Typography>
      </AppBar>
      <Route exact path="/" component={PizzaOfTheDay} />
      <Route path="/step1" component={PizzaSize} />
      <Route path="/step2" component={PizzaBorder} />
      <Route path="/step3" component={PizzaTaste} />
      <Route path="/result" component={FinalPizza} />
    </>
  );
};

export default App;
