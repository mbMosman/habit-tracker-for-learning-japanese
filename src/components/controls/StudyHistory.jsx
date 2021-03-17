import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1) * 3,
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: '1.5rem'
  },
  table: {
    minWidth: 750,
  },
}));

function StudyHistory() {

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const studyHistory = useSelector((store) => store.studyHistory);

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_HISTORY'});
    }, 
    []
  );

  const formatDate = (date) => {
    const obj = new Date(date);
    return obj.toLocaleDateString();
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        Study History
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Study Tool</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studyHistory.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{formatDate(row.date)}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.study_time} min</TableCell>
              <TableCell>{row.notes}</TableCell>
              <TableCell>
                <Button variant="contained" onClick={()=>history.push(`/detail/${row.id}`)}>
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default StudyHistory;
