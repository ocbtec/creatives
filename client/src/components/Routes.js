import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import Terms from "./Terms";
import Login from "./Login";
import RegisterCreative from "./RegisterCreative";
import RegisterUser from "./RegisterUser";
import Showcase from "./Showcase";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/terms" component={Terms} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/registercreative" component={RegisterCreative} exact />
      <Route path="/registeruser" component={RegisterUser} exact />
      <Route path="/showcase" component={Showcase} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
