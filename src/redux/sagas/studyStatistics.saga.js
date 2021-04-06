import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStudyStatistics() {
  try {
    const response = yield axios.get('/api/study/statistics');
    yield put({ type: 'SET_STUDY_STATISTICS', payload: response.data });

  } catch (error) {
    console.error('Failed to get study statistics', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_STUDY_STATISTICS', fetchStudyStatistics);
}

export default userSaga;
