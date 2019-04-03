import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// import './Sigin.css';
import SignInTheme from './SignInTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const SignIn = props => {
  const [form, setValues] = useState({
    email: '',
    password: ''
  });
  const { classes, authIn, isLoading } = props;

  const handleOnChange = e => {
    setValues({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    authIn(form);
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>Email Address</InputLabel>
            <Input
              id='email'
              name='email'
              value={form.email}
              autoComplete='email'
              autoFocus
              onChange={handleOnChange}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={form.passoword}
              onChange={handleOnChange}
            />
          </FormControl>
          <div className={classes.wrapper}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              // onClick={handleSubmit}
              disabled={isLoading}
            >
              Sign in
            </Button>
            {isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </form>
      </Paper>
    </main>
  );
};

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(SignInTheme)(SignIn);
