import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { AuthContext } from '../index';
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
      <button onClick={authIn}>SingIn</button>
      {isLoading && <span>Loading</span>}
    </>
  );
};

export default withRouter(AuthPage);
