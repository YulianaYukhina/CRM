// @flow
import * as _ from 'lodash'

export const getCreateProjectFields = state => {
  return _.get(state, ['projects', 'createProjectFieldsValue']);
}
