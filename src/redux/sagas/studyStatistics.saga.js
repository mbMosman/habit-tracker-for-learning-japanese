import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchStudyStatistics() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/study/statistics', config);
    yield put({ type: 'SET_STUDY_STATISTICS', payload: response.data });

  } catch (error) {
    console.error('Failed to get study statistics', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_STUDY_STATISTICS', fetchStudyStatistics);
}

export default userSaga;
