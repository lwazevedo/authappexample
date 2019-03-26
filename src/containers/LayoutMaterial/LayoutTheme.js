import { createMuiTheme } from '@material-ui/core/styles';
import { purple, green, indigo, blueGrey } from '@material-ui/core/colors';

const LayoutTheme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700]
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default LayoutTheme;
