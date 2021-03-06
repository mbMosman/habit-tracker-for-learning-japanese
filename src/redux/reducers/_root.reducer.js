import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import studyDetail from './studyDetail.reducer';
import studyGraphData from './studyGraph.reducer';
import studyHistory from './studyHistory.reducer';
import studyStreak from './studyStreak.reducer';
import studyStatistics from './studyStatistics.reducer';
import studyTools from './studyTool.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // logged in users info (id & username) if someone is logged in
  studyDetail, // specific entry detail for view or edit
  studyHistory, // summary of entries for history table
  studyGraphData, // data for study progress graph 
  studyStreak, // data for study streak 
  studyStatistics, // cumulative default stats for home page
  studyTools, // study tools for logged in user
});

export default rootReducer;
