import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../index';
import { withRouter } from 'react-router-dom';
import authService from '../../services/authService';

const userData = {
  email: 'lwnazevedo@gmail.com',
  password: 'senha123'
}

const AuthPage = props => {
  const { setAuthenticated, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (authenticated) props.history.push('/home');
  }, [authenticated]);

  const authIn = () => {

    authService.singIn(userData).then(() => {
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
