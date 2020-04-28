import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import {
  HomeView,
  NotFoundView,
  SignInView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <HomeView />
        )}
      />
      <Route
        exact
        path='/sign-in'
        render={() => (
          <SignInView />
        )}
      />
      <Route
        exact
        path='/not-found'
        render={() => (
          <NotFoundView />
        )}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
