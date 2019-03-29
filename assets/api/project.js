import axios from 'axios'

const SAVE_PROJECT_URL = '/project/save'

export const apiSaveProject = data =>
  axios.post(SAVE_PROJECT_URL, data)
