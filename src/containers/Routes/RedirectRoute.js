import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../index';

const RedirectRoute = () => {
  const { authenticated } = useContext(AuthContext);
  return authenticated ? <Redirect to='/Home' /> : <Redirect to='/singIn' />;
};

export default RedirectRoute;
