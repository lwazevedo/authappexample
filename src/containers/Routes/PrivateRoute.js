import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../index';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const { authenticated } = useContext(AuthContext);
  return (
    <Route
      {...routeProps}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/singIn',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
