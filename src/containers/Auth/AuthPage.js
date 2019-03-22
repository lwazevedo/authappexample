import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../index';
import { withRouter } from 'react-router-dom';
import authService from '../../services/authService';

const AuthPage = props => {
  const [isLoading, setLoading] = useState();
  const { setAuthenticated, authenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading && authenticated) props.history.push('/home');
  });

  const authIn = () => {
    setLoading(true);
    authService.singIn().then(() => {
      setAuthenticated(true);
      setLoading(false);
      props.history.push('/home');
    });
  };

  return (
    <>
      <button onClick={authIn}>Login</button>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default withRouter(AuthPage);
