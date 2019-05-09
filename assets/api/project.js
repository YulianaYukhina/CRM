import axios from 'axios'

const SAVE_PROJECT_URL = '/project/save'
const GET_PROJECT_LIST_URL = '/project/getProjectList'
const DELETE_PROJECT_URL = '/project/deleteProject'
const GET_PROJECT_BY_ID_URL = '/project/getProject'
const GET_ADD_COMMENT_URL = '/project/addComment'

export const apiSaveProject = data =>
  axios.post(SAVE_PROJECT_URL, data)

export const apiAddComment = data =>
  axios.post(GET_ADD_COMMENT_URL, data)

export const apiGetProjectList = (search) =>
  axios.get(GET_PROJECT_LIST_URL, { params: { search: search || '' } }).then(res => res.data);

export const apiGetProjectById = id =>
  axios.get(GET_PROJECT_BY_ID_URL, { params: { id } }).then(res => res.data);

export const apiDeleteProject = id =>
  axios.get(DELETE_PROJECT_URL, { params: { id } });
