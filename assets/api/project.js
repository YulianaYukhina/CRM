import axios from 'axios'

const SAVE_PROJECT_URL = '/project/save'
const GET_PROJECT_LIST = '/project/getProjectList'

export const apiSaveProject = data =>
  axios.post(SAVE_PROJECT_URL, data)

export const apiGetProjectList = () =>
  axios.get(GET_PROJECT_LIST).then(res =>
    {
      return res.data
    });
