const DashboardTheme = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 700,
    margin: '0 auto'
  },
  margin: {
    marginTop: 2
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  typography: {
    useNextVariants: true
  },
  divProgess: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto'
  },
  progress: {
    margin: '0 auto',
    padding: '0 10px'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  cardContent: {
    flexGrow: 1
  },
  close: {
    padding: theme.spacing.unit / 2
  }
});

export default DashboardTheme;
