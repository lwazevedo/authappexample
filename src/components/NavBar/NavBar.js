import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

import NavBarTheme from './NavBarTheme';

const NavBar = props => {
  const { classes, onOpenDrawer, onIsOpenDrawer } = props;
  return (
    <AppBar
      position='absolute'
      className={onIsOpenDrawer ? classes.appBarShift : classes.appBar}
    >
      <Toolbar disableGutters={!onIsOpenDrawer} className={classes.toolbar}>
        <IconButton
          color='inherit'
          aria-label='Open drawer'
          onClick={onOpenDrawer}
          className={
            onIsOpenDrawer ? classes.menuButtonHidden : classes.menuButton
          }
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          App
        </Typography>
        {/* <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(NavBarTheme)(NavBar);
