import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
  },
  heading: {
    padding: theme.spacing(1) * 3,
    textTransform: 'uppercase',
    fontSize: '1.5rem'
  }
}));





function ProgressGraph() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((store) => store.studyGraphData);

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_GRAPH'});
    }, 
    []
  );

  const data = {
    labels: graphData.dates,
    datasets: [ 
      {
        label: 'Kanji',
        fill: true,
        backgroundColor: '#d3d3d3',
        borderColor: '#d3d3d3',
        data: graphData.kanji_counts,
        yAxisID: 'y-axis-1',
      }, {
        label: 'Vocabulary',
        fill: true,
        backgroundColor: '#f5f3f4',
        borderColor: '#f5f3f4',
        data: graphData.vocab_counts,
        yAxisID: 'y-axis-1',
      }, {
        label: 'Study Time',
        backgroundColor: '#b1a7a6',
        borderColor: '#b1a7a6',
        borderDash: [5, 5],
        data: graphData.times,
        fill: true,
        yAxisID: 'y-axis-2',
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" className={classes.heading}>
        Learning Progress
      </Typography>
      <Line data={data} options={options} />
    </Paper>
  );
}

export default ProgressGraph;
