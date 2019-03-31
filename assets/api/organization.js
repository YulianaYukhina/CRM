// запросы к серверу (к контроллеру организации)
import axios from 'axios'

const SAVE_ORGANIZATION_URL = '/organization/save'
const GET_ORGANIZATION_LIST_URL = '/organization/getOrganizations'

export const apiSaveOrganization = data =>
  axios.post(SAVE_ORGANIZATION_URL,data);

export const apiGetOrganizationList = () =>
  axios.get(GET_ORGANIZATION_LIST_URL)
