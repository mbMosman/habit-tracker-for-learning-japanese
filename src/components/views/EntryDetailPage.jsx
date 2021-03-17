import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PencilIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  headingRow: {
    fontSize: '1.2em',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: 'inherit',
    textTransform: 'uppercase',
  },
  iconButton: {
    fontSize: 'inherit',
    padding: '0.25em',
  },
  label: {
    fontSize: '1.5em',
  },
  row: {
    marginBottom: theme.spacing(3),
  },
  statisticRow: {
    marginBottom: theme.spacing(1),
    fontSize: '1.25em',
  },
  borderContainer: {
    padding: theme.spacing(2),
    border: 'solid gray 1px',
    marginBottom: theme.spacing(1),
  }
}));

function EntryDetailPage() {

  const [editMode, setEditMode] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const details = useSelector((store) => store.studyDetail);
  const history = useHistory();
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

  const cancelEdit = () => {
    // clear edit field 
    setEditMode(false);
  }

  const saveEdit = () => {
    // save edit field 
    setEditMode(false);
  }

  const deleteEntry = () => {
    console.log('Clicked Delete');
  }

  return (
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

      <section className={classes.row}>
        <div className={classes.headingRow}>
          <Typography variant="h4" className={classes.heading}>
            Statistics
          </Typography>
        </div>
        <Grid container className={classes.borderContainer}>
          <Grid item container xs={7} className={classes.statisticRow}>
            <Grid item xs={6}><Typography>Study Time</Typography></Grid>
            <Grid item xs={6}>
              <Typography>{details.study_time} minutes</Typography>
            </Grid>
          </Grid>
          
          <Grid item container xs={7} className={classes.statisticRow}>
            <Grid item xs={6}><Typography>Vocabulary</Typography></Grid>
            <Grid item xs={6}>
              <Typography>{details.vocab_count} words</Typography>
            </Grid>
          </Grid>

          <Grid item container xs={7} className={classes.statisticRow}>
            <Grid item xs={6}><Typography>Kanji</Typography></Grid>
            <Grid item xs={6}>
              <Typography>{details.kanji_count}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </section>

      <section className={classes.row}>
        <Grid container justify="space-between" alignItems="center" 
            className={classes.headingRow}>
          <Grid item>
            <Typography variant="h4" className={classes.heading}>
              Notes
            </Typography>
          </Grid>
          <Grid item >
            <IconButton className={classes.iconButton} onClick={() => setEditMode(true)}>
              <PencilIcon />
            </IconButton>
          </Grid>
        </Grid>

        <div className={classes.borderContainer}>
          <Typography >{details.notes}</Typography>
        </div>

        { editMode && (
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="contained" className={classes.button}
                  onClick={cancelEdit}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.button}
                  color="primary" onClick={saveEdit}>
                Save
              </Button>
            </Grid>
          </Grid>
        )}

        { !editMode && (
          <Grid container justify="flex-end">
            <Grid item>
              <Button variant="contained" className={classes.button}
                  onClick={()=>history.push(`/home`)}>
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" className={classes.button}
                  color="secondary" onClick={deleteEntry}>
                Delete
              </Button>
            </Grid>
          </Grid>
        )}
      </section>
    </>
  );
}

export default EntryDetailPage;
