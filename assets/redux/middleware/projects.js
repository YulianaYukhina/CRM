import { all, takeEvery, call, put, select, take } from 'redux-saga/effects'

import { getCreateProjectFields } from '../../selectors/project'

import { apiSaveProject } from '../../api/project'

import { FETCH_CREATE_PROJECT } from '../modules/project'



function* studentList() {
  yield all([
      takeEvery(FETCH_CREATE_PROJECT, function* () {
          try {
              var fields = yield select(getCreateProjectFields);
              yield call(apiSaveProject, fields);
              yield console.log('sqve new project success!')
          } catch(e){
              yield console.log('save new project error!')
          }
      }),
  ])
}

export default studentList;
