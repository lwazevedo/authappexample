import React, { useEffect, useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { AuthPage } from '../index';
import { Home, Dashboard } from '../../components';

import PrivateRoute from './PrivateRoute';
import RedirectRoute from './RedirectRoute';
import authService from '../../services/authService';
import { AuthContext } from '../index';

const api = authService.ap()

const Routes = (props) => {
  const { history } = props
  const { setAuthenticated } = useContext(AuthContext);

  api.interceptors.response.use(response => response, (error) => {
    if (error.response.status === 401) {
      window.localStorage.clear()
      setAuthenticated(false);
      history.push('/singIn')
    }

  })

  return (
    <Switch>
      <PrivateRoute exact path='/home' component={Home} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <Route exact path='/singIn' component={AuthPage} />
      <RedirectRoute />
    </Switch>
  );
};

export default withRouter(Routes);
