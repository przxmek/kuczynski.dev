import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
} from '@material-ui/core';

import theme from './themes/defaultTheme';

import HomeCard from './HomeCard';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundImage: 'linear-gradient(45deg, #3B3B7A 0%, #91617E 100%)',
    width: '100vw',
    height: '100vh',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
}));

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <HomeCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
