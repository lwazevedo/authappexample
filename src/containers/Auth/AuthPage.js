import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { SignIn } from '../../components';
import { AuthContext } from '../index';

import authService from '../../services/authService';

const AuthPage = props => {
  const [isLoading, setLoading] = useState(false);
  const { setAuthenticated, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading && authenticated) props.history.push('/home');
  });

  const authIn = userData => {
    setLoading(true);
    authService.singIn(userData).then(() => {
      setAuthenticated(true);
      setLoading(false);
      props.history.push('/home');
    });
  };

  return <SignIn authIn={authIn} isLoading={isLoading} />;
};

export default withRouter(AuthPage);
