import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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

  const classes = useStyles();
  const rows = [
    {
      id: 1,
      date: '1/8/2019',
      tool: 'Duolingo',
      time: '35',
      note: 'Activity - Level 2/5, Lesson 3/10'
    },
    {
      id: 2,
      date: '1/8/2019',
      tool: 'Wanikani',
      time: '23',
      note: '53% Correct, need more practice...'
    },    {
      id: 3,
      date: '1/6/2019',
      tool: 'Genki',
      time: '90',
      note: 'Lesson 4 - Vocabulary & Exercises'
    },
  ]

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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.tool}</TableCell>
              <TableCell>{row.time} min</TableCell>
              <TableCell>{row.note}</TableCell>
              <TableCell>
                <Button variant="contained">Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default StudyHistory;
