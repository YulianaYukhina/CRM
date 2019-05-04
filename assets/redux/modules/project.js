const module = 'project'

export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE`
export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE_ERROR`
export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL`
export const FETCH_GET_PROJECT_LIST = `${module}/FETCH_GET_PROJECT_LIST`
export const FETCH_GET_PROJECT_LIST_SUCCESS = `${module}/FETCH_GET_PROJECT_LIST_SUCCESS`
export const FETCH_GET_PROJECT_BY_ID = `${module}/FETCH_GET_PROJECT_BY_ID`
export const FETCH_GET_PROJECT_BY_ID_SUCCESS = `${module}/FETCH_GET_PROJECT_BY_ID_SUCCESS`
export const FETCH_DELETE_PROJECT = `${module}/FETCH_DELETE_PROJECT`

const defaultState = {
  createProjectFieldsValue: {
    design: [],
    constructionWork: [],
    specialEngineeringSystems: [],
  },
  createProjectFieldsValueError: {},
  projectList: [],
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
    case FETCH_GET_PROJECT_BY_ID:
    case FETCH_SET_CREATE_PROJECT_FIELD_VALUE_NULL:
      return {
        ...projectState,
        createProjectFieldsValue: {
          design: [],
          constructionWork: [],
          specialEngineeringSystems: [],
        },
      }
    // case FETCH_GET_PROJECT_LIST:
    //   return {
    //     ...projectState,
    //     projectList: [],
    //   }
    case FETCH_GET_PROJECT_LIST_SUCCESS:
      return {
        ...projectState,
        projectList: payload,
      }
    case FETCH_GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...projectState,
        createProjectFieldsValue: payload,
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

export const fetchGetProjectList = data => ({
  payload: data,
  type: FETCH_GET_PROJECT_LIST,
})

export const fetchGetProjectListSuccess = data => ({
  type: FETCH_GET_PROJECT_LIST_SUCCESS,
  payload: data,
})

export const fetchGetProjectByID = id => ({
  type: FETCH_GET_PROJECT_BY_ID,
  payload: id,
})

export const fetchGetProjectByIdSuccess = data => ({
  type: FETCH_GET_PROJECT_BY_ID_SUCCESS,
  payload: data,
})

export const fetchDeleteProject = id => ({
  type: FETCH_DELETE_PROJECT,
  payload: id,
})
