import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
        {...rest}
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
