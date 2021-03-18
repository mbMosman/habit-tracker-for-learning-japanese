import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  borderContainer: {
    padding: theme.spacing(2),
    border: 'solid gray 1px',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: 'inherit',
    textTransform: 'uppercase',
  },
  headingRow: {
    fontSize: '1.25em',
    marginBottom: theme.spacing(1),
  },
  statisticRow: {
    marginBottom: theme.spacing(1.5),
  },
  root: {
    marginBottom: theme.spacing(3),
  },
}));

function EntryStatistics({statisticList}) {

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.headingRow}>
        <Typography variant="h4" className={classes.heading}>
          Statistics
        </Typography>
      </div>
      <Grid container className={classes.borderContainer}>
        { statisticList.map( (item, i) => 
          <Grid key={i}item container alignItems="center"
              className={classes.statisticRow}
              xs={(statisticList.length > 4) ? 6 : 7} 
          >
            <Grid item xs={6}><Typography>{item.label}</Typography></Grid>
            <Grid item xs={6}><Typography>{item.value}</Typography></Grid>
          </Grid>
        )}
      </Grid>
    </section>
  );
}

export default EntryStatistics;
