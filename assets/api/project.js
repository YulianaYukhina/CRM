import axios from 'axios'

const SAVE_PROJECT_URL = '/project/save'
const GET_PROJECT_LIST_URL = '/project/getProjectList'
const DELETE_PROJECT_URL = '/project/deleteProject'
const GET_PROJECT_BY_ID_URL = '/project/getProject'

export const apiSaveProject = data =>
  axios.post(SAVE_PROJECT_URL, data)

export const apiGetProjectList = () =>
  axios.get(GET_PROJECT_LIST_URL).then(res => res.data);

export const apiGetProjectById = id =>
  axios.get(GET_PROJECT_BY_ID_URL, {params: {id}}).then(res => res.data);

export const apiDeleteProject = id =>
  axios.get(DELETE_PROJECT_URL, { params: { id }});
