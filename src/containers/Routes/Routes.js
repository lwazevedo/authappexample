import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthPage } from '../index';
import { Home, Dashboard } from '../../components';

import PrivateRoute from './PrivateRoute';
import RedirectRoute from './RedirectRoute';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route exact path='/singIn' component={AuthPage} />
      <RedirectRoute />
    </Switch>
  );
};

export default Routes;
