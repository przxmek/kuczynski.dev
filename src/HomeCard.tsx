import React from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  Theme,
  createStyles,
  Avatar,
  IconButton,
} from '@material-ui/core';
import Tilt from 'react-parallax-tilt';

import AvatarImg from "./static/avatar2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles((theme: Theme) => createStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '16rem',
    },
    [theme.breakpoints.only('sm')]: {
      width: '22rem',
    },
    [theme.breakpoints.only('md')]: {
      width: '28rem',
    },
    [theme.breakpoints.only('lg')]: {
      width: '32rem',
    },
    [theme.breakpoints.only('xl')]: {
      width: '36rem',
    },
    margin: theme.spacing(2),
    padding: theme.spacing(4),

    backgroundImage: 'linear-gradient(30deg, rgba(255,255,255,0.522) 15%, #FFFFFF 59%)',
    boxShadow: '0rem 1.25rem 2.625rem 0.375rem rgba(0,0,0,0.18)',
    borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
    transition: 'opacity 1.125s ease 0.5s,transform 1.125s ease 0.5s',

    backgroundPosition: '0% 0%',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',

    '& > *': {
      marginTop: '0.625rem',
      marginBottom: '0.625rem',
    },
    '& > :first-child': {
      marginTop: '0 !important',
    },
  },
  avatar: {
    [theme.breakpoints.only('xs')]: {
      width: '4em',
      height: '4em',
    },
    [theme.breakpoints.only('sm')]: {
      width: '5em',
      height: '5em',
    },
    [theme.breakpoints.only('md')]: {
      width: '5em',
      height: '5em',
    },
    [theme.breakpoints.only('lg')]: {
      width: '6em',
      height: '6em',
    },
    [theme.breakpoints.only('xl')]: {
      width: '7em',
      height: '7em',
    },
  },
  textName: {
    color: 'rgba(40,40,43,0.6)',
    letterSpacing: '-0.075rem',
    width: '100%',
    lineHeight: '1.25',
    fontWeight: 200,
  },
  textDesc: {
    color: 'rgba(40,40,43,0.55)',
    fontFamily: '"Source Sans Pro", sans-serif',
    letterSpacing: '-0.025rem',
    width: '100%',
    lineHeight: '1.5',
    fontWeight: 200,
  },
  divider: {
    backgroundColor: 'rgba(40,40,43,0.149)',
    alignSelf: "stretch",
    margin: '1.125rem 0 ',
  },
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

const HomeCard: React.FunctionComponent = () => {
  const classes = useStyles();

  const emailAction = () => {
    const name = 'przemek';
    const domain = 'kuczynski.dev';
    const params = '?subject=Hello!';

    window.location.href = `mailto:${name}@${domain}${params}`;
  }

  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={3}
      transitionSpeed={16000}
      gyroscope
      perspective={2000}
      trackOnWindow
    >
      <div className={classes.card}>
        <Avatar
          alt="Picture of Przemek"
          src={AvatarImg}
          className={classes.avatar}
        />

        <Typography
          variant='h1'
          className={classes.textName}
        >
          Przemek Kuczyński
        </Typography>
        <Typography
          variant='body1'
          className={classes.textDesc}
        >
          Software Engineer | Adventurer
        </Typography>
        <Divider className={classes.divider} />

        <div>
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
      </div>
    </Tilt>

  );
}

export default HomeCard;
