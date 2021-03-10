import React from 'react';
import {useSelector} from 'react-redux';

import Grid from '@material-ui/core/Grid';

import StatisticCard from '../controls/StatisticCard';
import StudyStreak from '../controls/StudyStreak';
import ProgressGraph from '../controls/ProgressGraph';
import StudyHistory from '../controls/StudyHistory';



function UserPage() {

  const user = useSelector((store) => store.user);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <StatisticCard label="Study Time" value="21 days, 9 hours, 43 minutes" />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatisticCard label="Vocabulary Count" value="8,324 words" />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatisticCard label="Kanji Count" value="34 kanji" />
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
