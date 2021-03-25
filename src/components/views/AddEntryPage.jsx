import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  headingRow: {
    fontSize: '1.2em',
    marginBottom: theme.spacing(1),
  },
  heading: {
    fontSize: 'inherit',
    textTransform: 'uppercase',
  },
  input: {
    minWidth: '10rem'
  },
  label: {
    display: 'inline-block',
    fontSize: '1.5em',
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(3),
  },
  row: {
    marginBottom: theme.spacing(3),
  },
  borderContainer: {
    padding: theme.spacing(2),
    border: 'solid gray 1px',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  statisticLabel: {
    display: 'inline-block',
    width: '15rem',
  },
  statisticRow: {
    marginBottom: theme.spacing(1.5),
  },
  textarea: {
    width: '100%',
    border: 'solid gray 1px',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.5),
    padding: 0,
    resize: 'both',
  },
}));

function AddEntryPage() {

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_TOOLS' });
    }, 
    []
  );

  const [selectedDate, setSelectedDate] = React.useState( moment().format('YYYY-MM-DD') );
  const [selectedTool, setSelectedTool] = React.useState('');
  const [studyTime, setStudyTime] = React.useState('');
  const [vocabCount, setVocabCount] = React.useState('');
  const [kanjiCount, setKanjiCount] = React.useState('');
  const [customStatistics, setCustomStatistics] = React.useState([]);
  const [noteText, setNoteText] = React.useState('');

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const studyTools = useSelector((store) => store.studyTools);

  const getGridWidth = () => (customStatistics.length > 1) ? 6 : 12;
  
  const handleSelectTool = (event) => {
    setSelectedTool(event.target.value);
    let index = studyTools.findIndex( item => item.id == event.target.value );
    console.log("Selected Tool", studyTools[index])
    setCustomStatistics(studyTools[index].custom_stats);
  }

  const handlePositiveNumberOnly = (event, setter) => {
    let number = event.target.value;
    if (number >= 0) {
      setter(number)
    }
  }

  // TODO - Sort out saving custom statistics
  const handleSave = (event) => {
    event.preventDefault();
    const entry = {
      toolId: selectedTool,
      date: selectedDate,
      studyTime: studyTime,
      vocabCount: vocabCount,
      kanjiCount: kanjiCount,
      note: noteText
    }
    dispatch( {type: 'ADD_STUDY_DETAIL', payload: entry} );
    history.push('/home');
  }

  return (
    <Paper className={classes.paper}>
    { 
      <form onSubmit={handleSave}>
        <section className={classes.row}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography className={classes.label}>Study Tool:</Typography>
            <TextField select required className={classes.input}
              value={selectedTool} 
              onChange={handleSelectTool}
              placeholder="Select a study tool" 
            >
              { studyTools.map( item => 
                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
              )}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography className={classes.label}>Date:</Typography>
            <TextField type="date"
              defaultValue={selectedDate}
              className={classes.dateField}
              onChange={(event) => setSelectedDate(event.target.value)}
            />
          </Grid>
        </Grid>
        </section>
        
        <section className={classes.root}>
          <div className={classes.headingRow}>
            <Typography variant="h4" className={classes.heading}>
              Statistics
            </Typography>
          </div>
          <Grid container className={classes.borderContainer}>
            <Grid item className={classes.statisticRow} xs={(getGridWidth())}>
              <Typography className={classes.statisticLabel}>Study Time (minutes)</Typography>
              <TextField type="number" required
                  value={studyTime} onChange={(e) => handlePositiveNumberOnly(e, setStudyTime)} 
                  endAdornment={<InputAdornment position="end">(minutes)</InputAdornment>} />
            </Grid>
            <Grid item className={classes.statisticRow} xs={(getGridWidth())}>
              <Typography className={classes.statisticLabel}>Vocabulary (words)</Typography>
              <TextField type="number" required
                  value={vocabCount} onChange={(e) => handlePositiveNumberOnly(e, setVocabCount)} />
            </Grid>
            <Grid item className={classes.statisticRow} xs={(getGridWidth())}>
              <Typography className={classes.statisticLabel}>Kanji</Typography>
              <TextField type="number" required
                  value={kanjiCount} onChange={(e) => handlePositiveNumberOnly(e, setKanjiCount)}/>
            </Grid>
            { customStatistics.map( (item, i) => 
              <Grid key={i}item className={classes.statisticRow} xs={(getGridWidth())}>
                <Typography className={classes.statisticLabel}>{item.label}</Typography>
                <TextField />
              </Grid>
            )}
          </Grid>
        </section>
        <section className={classes.row}>
          <div className={classes.headingRow}>
            <Typography variant="h4" className={classes.heading}>
              Notes
            </Typography>
          </div>
          <TextField className={classes.textarea} 
              multiline variant="outlined"
              value={noteText} 
              onChange={ (event)=>setNoteText(event.target.value) }/>
        </section>
        <Grid container justify="flex-end">
          <Grid item>
            <Button variant="contained" className={classes.button}
                onClick={() => history.goBack()}>
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.button}
                color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    }
    </Paper>
  );
}

export default AddEntryPage;
