import { all, takeEvery, call, put, select, take } from 'redux-saga/effects'

import { apiGetProjectList, apiDeleteProject, apiGetProjectById } from '../../api/project'

import {
  FETCH_GET_PROJECT_LIST,
  fetchGetProjectListSuccess,
  FETCH_DELETE_PROJECT,
  fetchGetProjectList,
  FETCH_GET_PROJECT_BY_ID,
  fetchGetProjectByIdSuccess,
} from '../modules/project'

function* studentList() {
  yield all([
    takeEvery(FETCH_GET_PROJECT_LIST, function* (data) {
      try {
        var projectList = yield call(apiGetProjectList, data.payload || '');
        yield put(fetchGetProjectListSuccess(projectList));
      } catch (e) {
        yield console.log('get project list error!')
      }
    }),
    takeEvery(FETCH_DELETE_PROJECT, function* (data) {
      try {
        yield call(apiDeleteProject, data.payload);
        yield put(fetchGetProjectList());
      } catch (e) {
        yield console.log('delete project error!')
      }
    }),
    takeEvery(FETCH_GET_PROJECT_BY_ID, function* (data) {
      try {
        let project = yield call(apiGetProjectById, data.payload);
        yield put(fetchGetProjectByIdSuccess(project));
      } catch (e) {
        yield console.log('get project error!')
      }
    }),
  ])
}

export default studentList;
