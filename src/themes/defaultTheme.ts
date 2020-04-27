import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
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