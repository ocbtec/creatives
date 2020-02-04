import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import Terms from "./Terms";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/Terms" component={Terms} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
