import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import { RouteWithLayout } from './components';
import {
  SilverCardLayout
} from './layouts';
import {
  HomeView,
  NotFoundView,
  SignInView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        exact
        path='/'
        component={HomeView}
        layout={SilverCardLayout}
      />
      <RouteWithLayout
        exact
        path='/sign-in'
        component={SignInView}
        layout={SilverCardLayout}
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
