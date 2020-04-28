import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3B3B7A",
    },
    secondary: {
      main: "#91617E",
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
    h1: {
      fontSize: '3rem',
    },
    body1: {
      fontSize: '1.25rem',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;