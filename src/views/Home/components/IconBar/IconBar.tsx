import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  IconButton,
} from '@material-ui/core';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    width: '2rem',
    height: '2rem',
    margin: '0.375rem',
    backgroundColor: 'rgba(40,40,43,0.051)',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: 'rgba(40,40,43,0.169)',
    }
  }
}));

const IconBar = () => {
  const classes = useStyles();

  const emailAction = () => {
    const name = 'przemek';
    const domain = 'kuczynski.dev';
    const params = '?subject=Hello!';

    window.location.href = `mailto:${name}@${domain}${params}`;
  }

  return (<div>
    <IconButton
      onClick={emailAction}
      component="a"
      className={classes.button}
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </IconButton>
    <IconButton
      className={classes.button}
      href="https://github.com/przxmek"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </IconButton>
    <IconButton
      className={classes.button}
      href="https://www.linkedin.com/in/przekuczynski/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </IconButton>
    <IconButton
      className={classes.button}
      href="https://www.instagram.com/pomylilomisie/"
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </IconButton>
    <IconButton
      className={classes.button}
      href="https://www.facebook.com/pomylilomisie"
      target="_blank"
    >
      <FontAwesomeIcon icon={faFacebookSquare} />
    </IconButton>
  </div>
  );
}

export default IconBar;