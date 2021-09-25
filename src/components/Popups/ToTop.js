import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonStyle: {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
  },
});

export default function ToTop() {
  const classes = useStyles();
  return (
    <Button
      variant='contained'
      color='default'
      className={classes.buttonStyle}
      href='#top'
    >
      To top
    </Button>
  );
}
