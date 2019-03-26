const SignInTheme = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.,
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative'
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  buttonProgress: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

export default SignInTheme;
