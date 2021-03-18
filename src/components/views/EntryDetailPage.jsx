import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import EntryStatistics from '../controls/EntryStatistics';
import EntryNoteControl from '../controls/EntryNoteControl';

const useStyles = makeStyles((theme) => ({
  headingRow: {
    fontSize: '1.2em',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: 'inherit',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: '1.5em',
  },
  paper: {
    padding: theme.spacing(3),
  },
  row: {
    marginBottom: theme.spacing(3),
  },
}));

function EntryDetailPage() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const details = useSelector((store) => store.studyDetail);
  const {id} = useParams();

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_DETAIL', payload: { id } });
    }, 
    []
  );

  const formatDate = (fullDateString) => {
    let date = new Date(fullDateString);
    return date.toLocaleDateString();
  }

  const getStatistics = () => {
    return [ 
      {
        label: 'Study Time',
        value: `${details.study_time} minutes`
      }, 
      {
        label: 'Vocabulary',
        value: `${details.vocab_count} words`
      }, 
      {
        label: 'Kanji',
        value: details.kanji_count
      },
      // TODO - Stretch add custom statistics
    ]
  }

  return (
    <Paper className={classes.paper}>
    { details.id && (
      <>
        <section className={classes.row}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" className={classes.label}>
              Study Tool: {details.name}
            </Typography> 
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" className={classes.label}>
              Date: {formatDate(details.date)}
            </Typography>
          </Grid>
        </Grid>
        </section>
        <EntryStatistics statisticList={getStatistics()} />
        <EntryNoteControl id={details.id} 
            noteText={details.notes ? details.notes : ''} />
      </>
    )}
    </Paper>
  );
}

export default EntryDetailPage;
