import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LandingPage from "../page-components/LandingPage";
import Terms from "../page-components/Terms";
import Login from "../page-components/Login";
import RegisterCreative from "../page-components/RegisterCreative";
import RegisterUser from "../page-components/RegisterUser";
import Showcase from "../page-components/Showcase";
import About from "../page-components/About";
import Search from "../page-components/Search";
import UserUpdate from "../page-components/UserUpdate";
import Works from "../page-components/Works";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/terms" component={Terms} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/registercreative" component={RegisterCreative} exact />
      <Route path="/registeruser" component={RegisterUser} exact />
      <Route path="/showcase" component={Showcase} exact />
      <Route path="/about" component={About} exact />
      <Route path="/search" component={Search} exact />
      <Route path="/userupdate" component={UserUpdate} exact />
      <Route path="/works" component={Works} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
