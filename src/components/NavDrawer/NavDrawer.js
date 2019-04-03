import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

import NavDrawerTheme from './NavDrawerTheme';

const NavDrawer = props => {
  const { classes, onCloseDrawer, onIsOpenDrawer } = props;

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
      {/* <Divider /> */}
      {/* <List>{mainListItems}</List> */}
      {/* <Divider /> */}
      {/* <List>{secondaryListItems}</List> */}
    </Drawer>
  );
};

NavDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(NavDrawerTheme)(NavDrawer);
