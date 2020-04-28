import React from 'react';
import {
  Link,
  Typography,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {/* {'Copyright '} */}
      {'© '}
      {new Date().getFullYear()}
      {' '}
      <Link
        color="inherit"
        component={RouterLink}
        to="/">
        kuczynski.dev
      </Link>
      {'.'}
    </Typography>
  );
}

export default Copyright;