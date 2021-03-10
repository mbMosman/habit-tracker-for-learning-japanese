import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
  },
  heading: {
    padding: theme.spacing(1) * 3,
    textTransform: 'uppercase',
    fontSize: '1.5rem'
  }
}));

function ProgressGraph() {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        Learning Progress
      </Typography>
    </Paper>
  );
}

export default ProgressGraph;
