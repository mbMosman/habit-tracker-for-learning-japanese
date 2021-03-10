import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1) * 3,
    textAlign: 'center',  
    paper: {
      height: '100%',
    },
  },
  star: {
    fontSize: '12rem',
    color: 'gold',
  },
  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1.5rem',
  },
}));

function StudyStreak() {

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        Study Streak
      </Typography>
      <StarIcon className={classes.star} />
      <Typography className={classes.heading}>
        3 Days
      </Typography>
    </Paper>
  );
}

export default StudyStreak;
