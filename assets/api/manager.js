import axios from 'axios'

const SAVE_MANAGER_URL = '/manager/save'
const CHECK_EXIST_LOGIN = '/manager/checkExistLogin'
const GET_MANAGET_LIST_URL = '/manager/getManagers'

export const apiSaveManager = data =>
  axios.post(SAVE_MANAGER_URL,
     data,
     { headers: {'Content-Type': 'multipart/form-data' }}
     );

export const apiCheckExistLogin = login =>
  axios.get(CHECK_EXIST_LOGIN, { params: { login: login } })

export const apiGetManagerList = () =>
  axios.get(GET_MANAGET_LIST_URL)
