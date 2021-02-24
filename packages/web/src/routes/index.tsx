import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Post from '../pages/Post';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/signin" exact component={SignIn} isPublic />
    <Route path="/signup" exact component={SignUp} isPublic />
    <Route path="/:user/:post" component={Post} />
    <Route path="/:user" component={User} />
  </Switch>
);

export default Routes;
