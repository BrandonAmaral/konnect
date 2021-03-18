import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import Profile from '../pages/Profile';
import Post from '../pages/Post';
import User from '../pages/User';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Search from '../pages/Search';
import Settings from '../pages/Settings';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} isPublic />
    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/profile" exact component={Profile} isPrivate />
    <Route path="/signin" exact component={SignIn} isPublic />
    <Route path="/signup" exact component={SignUp} isPublic />
    <Route path="/search/:param" exact component={Search} isPrivate />
    <Route path="/settings" component={Settings} isPrivate />
    <Route path="/:user/:post" component={Post} isPrivate />
    <Route path="/:user" component={User} isPrivate />
  </Switch>
);

export default Routes;
