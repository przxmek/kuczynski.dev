import React from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  Theme,
  Avatar,
  Box,
} from '@material-ui/core';

import AvatarImg from "static/avatar2.jpg";
import { IconBar } from './components';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',

    '& > *': {
      marginTop: '0.625rem',
      marginBottom: '0.625rem',
    },
    '& > :first-child': {
      marginTop: '0 !important',
    },
    
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
    marginBottom: theme.spacing(1.25),
  },
  textName: {
    color: 'rgba(40,40,43,0.6)',
    letterSpacing: '-0.075rem',
    width: '100%',
    lineHeight: '1.25',
    fontWeight: 200,
    margin: theme.spacing(1.25, 0),
  },
  textDesc: {
    color: 'rgba(40,40,43,0.55)',
    fontFamily: '"Source Sans Pro", sans-serif',
    letterSpacing: '-0.025rem',
    width: '100%',
    lineHeight: '1.5',
    fontWeight: 200,
    margin: theme.spacing(1.25, 0),
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
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      className={classes.root}
    >
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
    </Box>
  );
}

export default HomeView;
