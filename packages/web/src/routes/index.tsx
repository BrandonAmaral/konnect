import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Profile from '../pages/Profile/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/profile" exact component={Profile} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
  </Switch>
);

export default Routes;
