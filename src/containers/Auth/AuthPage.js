import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../index';
import { withRouter } from 'react-router-dom';
import authService from '../../services/authService';

const AuthPage = props => {
  const { setAuthenticated, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) props.history.push('/home');
  }, [authenticated]);

  const authIn = () => {
    authService.singIn().then(() => {
      setAuthenticated(true);
      props.history.push('/home');
    });
  };

  return (
    <>
      <button onClick={authIn}>Login</button>
    </>
  );
};

export default withRouter(AuthPage);
