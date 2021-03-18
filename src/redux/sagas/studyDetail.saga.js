import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Gets study detail using server API
function* fetchStudyDetail(action) {
  try {

    const response = yield axios.get(`/api/study/${action.payload.id}`);
    yield put({ type: 'SET_STUDY_DETAIL', payload: response.data });

  } catch (error) {
    console.error('Failed to get study detail', error);
  }
}

//Deletes study detail using server API
function* deleteStudyDetail(action) {
  try {
    const response = yield axios.delete(`/api/study/${action.payload.id}`);
    yield put({ type: 'CLEAR_STUDY_DETAIL' });
    yield put({ type: 'FETCH_STUDY_HISTORY' });
    yield put({ type: 'FETCH_STUDY_STATISTICS' });
  } catch (error) {
    console.error('Failed to get study detail', error);
  }
}

function* studyDetailSaga() {
  yield takeLatest('FETCH_STUDY_DETAIL', fetchStudyDetail);
  yield takeLatest('DELETE_STUDY_DETAIL', deleteStudyDetail);
}

export default studyDetailSaga;
