import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UsersRoute from './users';

const MainRoute = () => (
  <Switch>
    <Route path="/users" component={UsersRoute} />
    <Redirect to="/users" />
  </Switch>
);

export default MainRoute;
