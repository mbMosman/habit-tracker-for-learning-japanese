import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Gets study tools using server API
function* fetchStudyTools(action) {
  try {

    const response = yield axios.get(`/api/study/tools`);
    yield put({ type: 'SET_STUDY_TOOLS', payload: response.data });

  } catch (error) {
    console.error('Failed to get study tools', error);
  }
}

function* studyToolSaga() {
  yield takeLatest('FETCH_STUDY_TOOLS', fetchStudyTools);
}
export default studyToolSaga;
