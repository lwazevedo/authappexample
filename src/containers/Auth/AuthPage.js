import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { AuthContext } from '../index';
import authService from '../../services/authService';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

const AuthPage = props => {
  const [isLoading, setLoading] = useState();
  const { setAuthenticated, authenticated } = useContext(AuthContext);
  const { classes } = props;

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
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            variant='contained'
            color='primary'
            className={classNames({
              [classes.buttonSuccess]: !isLoading
            })}
            disabled={isLoading}
            onClick={authIn}
          >
            Login
          </Button>

          {isLoading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(withStyles(styles)(AuthPage));
