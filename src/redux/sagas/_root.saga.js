import { all } from 'redux-saga/effects';
import StudyHistory from '../../components/controls/StudyHistory';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import studyHistory from './studyHistory.saga';
import studyStatistics from './studyStatistics.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), 
    registrationSaga(),
    userSaga(),
    studyHistory(),
    studyStatistics(),
  ]);
}
