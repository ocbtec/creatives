import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../page-components/LandingPage';
import Terms from '../page-components/Terms';
import Login from '../page-components/Login';
import RegisterCreative from '../page-components/RegisterCreative';
import RegisterUser from '../page-components/RegisterUser';
import Showcase from '../page-components/Showcase';
import About from '../page-components/About';
import Search from '../page-components/Search';
import UserProfile from '../page-components/UserProfile';
import CreativeProfile from '../page-components/CreativeProfile';
import Works from '../page-components/Works';
import Results from '../page-components/Results';
import WorkDetail from '../page-components/WorkDetail';
import CreativeDetail from '../page-components/CreativeDetail';
import Logout from '../components/Logout';
import NotFound404 from '../page-components/NotFound404';
import Contact from '../page-components/Contact';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={LandingPage} exact />
      <Route path='/terms' component={Terms} exact />
      <Route path='/login' component={Login} exact />
      <Route path='/registercreative' component={RegisterCreative} exact />
      <Route path='/registeruser' component={RegisterUser} exact />
      <Route path='/showcase' component={Showcase} exact />
      <Route path='/about' component={About} exact />
      <Route path='/search' component={Search} exact />
      <Route path='/userProfile' component={UserProfile} exact />
      <Route path='/creativeProfile' component={CreativeProfile} exact />
      <Route path='/works' component={Works} exact />
      <Route path='/results' component={Results} exact />
      <Route path='/workDetail' component={WorkDetail} exact />
      <Route path='/creativeDetail' component={CreativeDetail} exact />
      <Route path='/logout' component={Logout} exact />
      <Route path='/contact' component={Contact} exact />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
