import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LayoutTheme from './LayoutTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

const LayoutMaterialProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default LayoutMaterialProvider;
