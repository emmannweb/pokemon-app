import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import PokemonDetails from "./PokemonDetails";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/pokemon/:name" exact component={PokemonDetails} />
        <Route path="/:number" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
