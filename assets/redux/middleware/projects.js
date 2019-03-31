import { all, takeEvery, call, put, select, take } from 'redux-saga/effects'

import { apiGetProjectList } from '../../api/project'

import { FETCH_GET_PROJECT_LIST, fetchGetProjectListSuccess } from '../modules/project'

function* studentList() {
  yield all([
      takeEvery(FETCH_GET_PROJECT_LIST, function* () {
          try {
              var projectList = yield call(apiGetProjectList);
              yield put(fetchGetProjectListSuccess(projectList));
          } catch(e){
              yield console.log('get project list error!')
          }
      }),
  ])
}

export default studentList;
