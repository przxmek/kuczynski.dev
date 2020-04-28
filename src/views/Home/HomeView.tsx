import React from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  Theme,
  createStyles,
  Avatar,
} from '@material-ui/core';
import Tilt from 'react-parallax-tilt';

import AvatarImg from "static/avatar2.jpg";
import { IconBar } from './components';


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
}));

const HomeView: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
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

            <IconBar />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default HomeView;
