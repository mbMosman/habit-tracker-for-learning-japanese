import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStudyHistory() {
  try {
    const response = yield axios.get('/api/study');
    yield put({ type: 'SET_STUDY_HISTORY', payload: response.data });
  } catch (error) {
    console.error('Failed to get study history', error);
  }
}

function* fetchStudyGraph() {
  try {
    const response = yield axios.get('/api/study/graph');
    yield put({ type: 'SET_STUDY_GRAPH', payload: response.data });
  } catch (error) {
    console.error('Failed to get study graph data', error);
  }
}

function* fetchStudyStreak() {
  try {
    const response = yield axios.get('/api/study/streak');
    yield put({ type: 'SET_STUDY_STREAK', payload: response.data });
  } catch (error) {
    console.error('Failed to get study streak data', error);
  }
}

function* studyHistorySaga() {
  yield takeLatest('FETCH_STUDY_HISTORY', fetchStudyHistory);
  yield takeLatest('FETCH_STUDY_GRAPH', fetchStudyGraph);
  yield takeLatest('FETCH_STUDY_STREAK', fetchStudyStreak);
}

export default studyHistorySaga;
