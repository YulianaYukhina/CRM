// @flow
import * as _ from 'lodash'

export const getCreateProjectFields = state => {
  return _.get(state, ['projects', 'createProjectFieldsValue']);
}
export const getCreateProjectFieldsErorrs = state => {
  return _.get(state, ['projects', 'createProjectFieldsValueError']);
}

export const getProjectList = state =>
  _.get(state, ['projects', 'projectList'])
