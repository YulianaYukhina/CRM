const module = 'project'

export const FETCH_SET_CREATE_PROJECT_FIELD_VALUE = `${module}/FETCH_SET_CREATE_PROJECT_FIELD_VALUE`

const defaultState = {
  createProjectFieldsValue: {
    design: [],
    constructionWork: [],
    specialEngineeringSystems: [],
  },
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
        }
      }
    default:
      return projectState;
  }
}

export const fetchSetCreateProjectFieldValue = data => ({
  type: FETCH_SET_CREATE_PROJECT_FIELD_VALUE,
  payload: data,
})
