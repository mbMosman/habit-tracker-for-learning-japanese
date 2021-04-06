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

function* studyHistorySaga() {
  yield takeLatest('FETCH_STUDY_HISTORY', fetchStudyHistory);
  yield takeLatest('FETCH_STUDY_GRAPH', fetchStudyGraph);
}

export default studyHistorySaga;
