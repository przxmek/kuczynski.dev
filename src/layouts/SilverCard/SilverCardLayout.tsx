import React, { FunctionComponent } from 'react';
import {
  makeStyles,
} from '@material-ui/core';
import Tilt from 'react-parallax-tilt';

const useStyles = makeStyles((theme) => ({
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
    margin: theme.spacing(2),
    padding: theme.spacing(4),

    backgroundImage: 'linear-gradient(30deg, rgba(255,255,255,0.522) 15%, #FFFFFF 59%)',
    boxShadow: '0rem 1.25rem 2.625rem 0.375rem rgba(0,0,0,0.18)',
    borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
    transition: 'opacity 1.125s ease 0.5s,transform 1.125s ease 0.5s',

    backgroundPosition: '0% 0%',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  },
}));

interface Props {
  className?: string;
}

const SilverCardLayout: FunctionComponent<Props> = (props) => {
  const { children } = props;

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
          <main className={classes.card}>
            {children}
          </main>
        </Tilt>
      </div>
    </div>
  )
}

export default SilverCardLayout;