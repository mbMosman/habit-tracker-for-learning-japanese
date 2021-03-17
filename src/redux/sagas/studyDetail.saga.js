import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchStudyDetail(action) {
  try {

    const response = yield axios.get(`/api/study/${action.payload.id}`);
    yield put({ type: 'SET_STUDY_DETAIL', payload: response.data });

  } catch (error) {
    console.error('Failed to get study detail', error);
  }
}

function* studyDetailSaga() {
  yield takeLatest('FETCH_STUDY_DETAIL', fetchStudyDetail);
}

export default studyDetailSaga;
