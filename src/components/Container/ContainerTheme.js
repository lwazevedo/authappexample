const ContainerTheme = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
    alignItems: 'center'
  },
  appBarSpacer: theme.mixins.toolbar
});

export default ContainerTheme;
