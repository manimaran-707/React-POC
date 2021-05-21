import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../componentss/login/Login";
import Profile from "../componentss/profile/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
