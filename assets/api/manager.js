// запросы к серверу (к контроллеру менеджера)
import axios from 'axios'

const SAVE_MANAGER_URL = '/manager/save'
const GET_MANAGET_LIST_URL = '/manager/getManagers'

export const apiSaveManager = data =>
  axios.post(SAVE_MANAGER_URL,
    data,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

export const apiGetManagerList = () =>
  axios.get(GET_MANAGET_LIST_URL)
