import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
import HomeView from './views/Home/HomeView';

const Routes = () => {
  return (
    <Switch>
      <Route
        render={() => (
          <HomeView />
        )}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
