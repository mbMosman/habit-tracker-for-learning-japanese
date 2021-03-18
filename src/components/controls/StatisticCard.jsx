import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    height: '100%',
  },
  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1.5rem'
  },
  text: {
    color: 'grey',
    textAlign: 'center'
  }
}));

function StatisticCard({ label, value }) {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        {label}
      </Typography>
      <Typography className={classes.text}>
        {value}
      </Typography>
    </Paper>
  );
}

export default StatisticCard;
