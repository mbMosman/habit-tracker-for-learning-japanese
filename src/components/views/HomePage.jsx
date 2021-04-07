import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import StatisticCard from '../controls/StatisticCard';
import StudyStreak from '../controls/StudyStreak';
import ProgressGraph from '../controls/ProgressGraph';
import StudyHistory from '../controls/StudyHistory';



function UserPage() {

  const dispatch = useDispatch();
  const studyStatistics = useSelector((store) => store.studyStatistics);

  useEffect(() => {
      dispatch({ type: 'FETCH_STUDY_STATISTICS'});
    }, 
    []
  );

  const formatTime = (totalMinutes) => {

    if (!totalMinutes) {
      return 'no time yet'
    }

    const days = Math.floor( totalMinutes / (24*60) );
    const minutesRemaining = totalMinutes % (24*60)
    const hours = Math.floor( minutesRemaining / 60 );
    const minutes = minutesRemaining % 60;
    
    let message = '';
    if (days > 0) {
      message += `${days} day${ (days>1) ? 's' : ''}`;
    }
    if (hours > 0) {
      if (message != '') {
        message += ', '
      }
      message += `${hours} hour${ (hours>1) ? 's' : ''}`;
    }
    if (minutes > 0) {
      if (message != '') {
        message += ', '
      }
      message += `${minutes} minute${ (minutes>1) ? 's' : ''}`;;
    }
    return message;
  }
  
  return (
    <Grid container spacing={3}>
      <Grid item container alignItems="stretch" spacing={3}>
        <Grid item xs={12} md={4}>
          <StatisticCard label="Study Time" 
              value={formatTime(studyStatistics.study_time)} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticCard label="Vocabulary Count" 
              value={`${studyStatistics.vocab_count ? studyStatistics.vocab_count : 0} words`} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatisticCard label="Kanji Count" 
              value={`${studyStatistics.kanji_count ? studyStatistics.kanji_count : 0} kanji`} />
        </Grid>
      </Grid>
      <Grid item container alignItems="stretch" spacing={3}>
        <Grid item xs={12} md={8}>
          <ProgressGraph />
        </Grid>
        <Grid item xs={12} md={4}>
          <StudyStreak />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StudyHistory />
      </Grid>
    </Grid>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
