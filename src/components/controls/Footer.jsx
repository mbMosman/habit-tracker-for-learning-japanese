import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    textAlign: 'center',
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      My Japanese Study Tracker &copy; 2021  Mary Mosman
    </footer>
  );
}

export default Footer;
