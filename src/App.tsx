import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from './themes/defaultTheme';

import Routes from './Routes';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
