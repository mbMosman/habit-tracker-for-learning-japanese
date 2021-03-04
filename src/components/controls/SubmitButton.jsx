import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));

function SubmitButton({ label }) {

  const classes = useStyles();

  return (
    <Button className={classes.button} type="submit" variant="contained" color="primary">
      {label}
    </Button>
  );
}

export default SubmitButton;
