import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import ContainerTheme from './ContainerTheme';

const Container = props => {
  const { children, classes } = props;
  return (
    <div className={classes.content}>
      <div className={classes.appBarSpacer} />
      {children}
    </div>
  );
};

Container.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(ContainerTheme)(Container);
