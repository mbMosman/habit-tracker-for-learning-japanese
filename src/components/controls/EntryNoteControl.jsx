import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PencilIcon from '@material-ui/icons/Create';

import ConfirmationDialog from './ConfirmationDialog';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  borderContainer: {
    border: 'solid gray 1px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },  
  textarea: {
    width: '100%',
    border: 'solid gray 1px',
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.5),
    padding: 0,
    resize: 'both',
  },
  heading: {
    fontSize: 'inherit',
    textTransform: 'uppercase',
    paddingTop: theme.spacing(.5),
    paddingBottom: theme.spacing(.5),
  },
  headingRow: {
    fontSize: '1.25em',
    marginBottom: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  iconButton: {
    fontSize: 'inherit',
    paddingTop: theme.spacing(.25),
    paddingBottom: theme.spacing(.25),
  },
}));

function EntryNoteControl({id, noteText}) {

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const reset = () => {
    setEditText(noteText);
    setEditMode(false);
  }

  const saveEdit = () => {
    dispatch( {type: 'UPDATE_NOTE_TEXT', payload: { id, text: editText }} );
    reset();
  }

  const deleteEntry = () => {
    setDialogOpen(false);
    dispatch( {type: 'DELETE_STUDY_DETAIL', payload: { id }} );
    goBack();
  }

  const doEdit = () => {
    setEditText(noteText);
    setEditMode(true);
  }

  const goBack = () => {
    history.goBack();
    dispatch( {type: 'CLEAR_STUDY_DETAIL'} );
  }

  return (
    <>
      <ConfirmationDialog 
          isOpen={dialogOpen} 
          handleOk={deleteEntry}
          handleCancel={()=>setDialogOpen(false)}
          text="Are you sure you want to delete this entry?"
      />
      <section className={classes.row}>
        <Grid container justify="space-between" alignItems="center" 
            className={classes.headingRow}>
          <Grid item>
            <Typography variant="h4" className={classes.heading}>
              Notes
            </Typography>
          </Grid>
          <Grid item className={editMode ? classes.hide : ''}>
            <IconButton className={classes.iconButton} onClick={doEdit}>
              <PencilIcon />
            </IconButton>
          </Grid>
          
        </Grid>

        { editMode && (
          <>
            <TextField className={classes.textarea} 
                multiline variant="outlined"
                value={editText} 
                onChange={ (event)=>setEditText(event.target.value) }/>
            <Grid container justify="flex-end">
              <Grid item>
                <Button variant="contained" className={classes.button}
                    onClick={reset}>
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
          </>
        )}

        { !editMode && (
          <>
            <TextField className={classes.textarea} 
                multiline variant="outlined"
                value={noteText} />
            <Grid container justify="flex-end">
              <Grid item>
                <Button variant="contained" className={classes.button}
                    onClick={goBack}>
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" className={classes.button}
                    color="secondary" onClick={()=>setDialogOpen(true)}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </section>
    </>
  );
}

EntryNoteControl.propTypes = {
  id: PropTypes.number.isRequired,
  noteText: PropTypes.string.isRequired,
};

export default EntryNoteControl;
