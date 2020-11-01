import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { navbarTitles } from "../../../constants";
import { BasketballPageLink } from "../app/basketballPageLink";
import { CommentPageLink } from "../app/commentsPageLink";
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
        <Route exact path="/comments" component={CommentPageLink} />
      </Switch>
    </div>
  );
};

export default Routes;
