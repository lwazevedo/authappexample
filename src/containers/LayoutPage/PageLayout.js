import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';

import { Container, NavBar, NavDrawer } from '../../components';
import PageLayoutTheme from './PageLayoutTheme';
import { AuthContext } from '../index';

const PageLayout = props => {
  const { children, classes } = props;
  const { authenticated } = useContext(AuthContext);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  return (
    <div className={classes.root}>
      {authenticated && (
        <NavBar onOpenDrawer={handleOpenDrawer} onIsOpenDrawer={isOpenDrawer} />
      )}
      {authenticated && (
        <NavDrawer
          onCloseDrawer={handleCloseDrawer}
          onIsOpenDrawer={isOpenDrawer}
        />
      )}
      <Container>{children}</Container>
    </div>
  );
};

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(PageLayoutTheme)(PageLayout);
