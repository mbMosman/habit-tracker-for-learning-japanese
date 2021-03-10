import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchStudyHistory() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/study', config);
    yield put({ type: 'SET_STUDY_HISTORY', payload: response.data });

  } catch (error) {
    console.error('Failed to get study history', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_STUDY_HISTORY', fetchStudyHistory);
}

export default userSaga;
