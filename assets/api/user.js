import axios from 'axios'
import { setAuthToken } from '../axiosExtensions'
import history from '../history'

const login_url = '/api/user/login'
const getAllUsers_url = '/api/user/getAllUsers'
const updatePassword_url = '/api/user/updatePassword'

//fetch.payload

export const apiLogin = async data => {
  // return axios.post(login_url, data).then(data => {
  //   const { token, role } = data.data
  if((data.login == 'Admin' && data.password == 'P@ssw0rd') ||
   (data.login == 'User' && data.password == 'P@ssw0rd'))
   {
    var token = 'tempToken'; // TODO
    var role = data.login; // TODO удалить заглушку
    localStorage.setItem('CRM-jwt-client', token)
    localStorage.setItem('role', role);
    setAuthToken(token)
    history.push('/')
   }
  //   return data.data
  // })
}

export const apiLogout = () => {
  localStorage.removeItem('CRM-jwt-client')
  localStorage.removeItem('role')
  setAuthToken(false)
  history.go(0)
}

export const apiGetAllUsers = () => {
  return axios.get(getAllUsers_url).then(data => (data.data))
}

export const apiUpdatePassword = login => {
  return axios.get(updatePassword_url, {
    params: { login: login }
  }).then(data => (data.data))
}
