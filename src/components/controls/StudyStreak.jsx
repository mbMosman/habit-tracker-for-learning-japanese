import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const streak = useSelector((store) => store.studyStreak);

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_STREAK'});
    }, 
    []
  );

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        Study Streak
      </Typography>
      <StarIcon className={classes.star} />
      <Typography className={classes.heading}>
        {streak.count} Day{ streak.count!=1 ? 's' : '' }
      </Typography>
    </Paper>
  );
}

export default StudyStreak;
