import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  Divider
} from '@material-ui/core';

import {
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

import NavDrawerTheme from './NavDrawerTheme';

const NavDrawer = props => {
  const { classes, onCloseDrawer, onIsOpenDrawer, history } = props;
  const [itemSelected, setItemSelected] = useState(0);

  const navLink = (path, index) => {
    setItemSelected(index);
    history.push(path);
  };

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: classNames(
          classes.drawerPaper,
          !onIsOpenDrawer && classes.drawerPaperClose
        )
      }}
      open={onIsOpenDrawer}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={onCloseDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <ListItem
        button
        selected={itemSelected === 0}
        onClick={() => navLink('/home', 0)}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
      <ListItem
        button
        selected={itemSelected === 1}
        onClick={() => navLink('/dashboard', 1)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
    </Drawer>
  );
};

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(NavDrawerTheme)(withRouter(NavDrawer));
