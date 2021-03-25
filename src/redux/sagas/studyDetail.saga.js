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

//Adds a new study detail entry using server API
function* addStudyDetail(action) {
  try {
    const response = yield axios.post(`/api/study/`, action.payload);
    yield put({ type: 'FETCH_STUDY_HISTORY' });
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

//Updates study detail using server API
function* updateStudyDetail(action) {
  try {
    const response = yield axios.put(`/api/study/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_STUDY_DETAIL', payload: action.payload });
  } catch (error) {
    console.error('Failed to get study detail', error);
  }
}

function* studyDetailSaga() {
  yield takeLatest('FETCH_STUDY_DETAIL', fetchStudyDetail);
  yield takeLatest('ADD_STUDY_DETAIL', addStudyDetail);
  yield takeLatest('DELETE_STUDY_DETAIL', deleteStudyDetail);
  yield takeLatest('UPDATE_STUDY_DETAIL', updateStudyDetail);
}

export default studyDetailSaga;
