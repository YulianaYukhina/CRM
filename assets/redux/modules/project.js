const module = 'project'

export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE`
export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR`
export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL`
export const FETCH_CREATE_PROJECT = `${module}/FETCH_CREATE_PROJECT`

const defaultState = {
  createProjectFieldsValue: {
    design: [],
    constructionWork: [],
    specialEngineeringSystems: [],
  },
  createProjectFieldsValueError: {}
}

export default function reducer(projectState = defaultState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SET_CREATE_PROJECT_FIELD_VALUE:
      return {
        ...projectState,
        createProjectFieldsValue: {
          ...projectState.createProjectFieldsValue,
          [payload.name]: payload.value
        },
        createProjectFieldsValueError: {
          ...projectState.createProjectFieldsValueError,
          [payload.name]: false,
        }
      }
      case FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR: {
        return {
          ...projectState,
          createProjectFieldsValueError: {
            ...payload
          }
        }
      }
    case FETCH_SET_CREATE_PROJECT_FIELD_VALUE:
      return {
        ...projectState,
        createProjectFieldsValue: {
          design: [],
          constructionWork: [],
          specialEngineeringSystems: [],
        },
      }
    default:
      return projectState;
  }
}

export const fetchSetCreateProjectFieldValue = data => ({
  type: FETCH_SET_CREATE_PROJECT_FIELD_VALUE,
  payload: data,
})
export const fetchSetCreateProjectFieldValueError = data => ({
  type: FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR,
  payload: data,
})
export const fetchSetCreateProjectFieldValueNull = data => ({
  type: FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL,
})
export const fetchCreateProject = data => ({
  type: FETCH_CREATE_PROJECT,
})
