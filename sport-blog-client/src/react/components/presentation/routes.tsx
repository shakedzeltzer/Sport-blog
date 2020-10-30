import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { navbarTitles } from "../../../constants";
import { BasketballPageLink } from "../app/basketballPageLink";
import { FootballPageLink } from "../app/footballPageLink";
import Navbar from "./navbar";

interface IProps {}

const Routes: React.FC<IProps> = () => {
  return (
    <div>
      <Navbar navbarTitles={navbarTitles} />
      <Switch>
        <Route exact path="/football" component={FootballPageLink} />
        <Route exact path="/">
          <Redirect to="/football" />
        </Route>
        <Route exact path="/basketball" component={BasketballPageLink} />
      </Switch>
    </div>
  );
};

export default Routes;
