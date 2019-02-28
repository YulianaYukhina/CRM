import axios from 'axios'
import { setAuthToken } from '../axiosExtensions'
import history from '../history'

const login_url = '/user/login'
const logout_url = '/user/logout'
const test_url = '/testLogin'
//fetch.payload

export const apiTest = async data => {
  return axios.get(test_url);
}

export const apiLogin = async data => {
   return axios.post(login_url, data).then(data => {
     const { token, role } = data.data
  // if((data.login == 'Admin' && data.password == 'P@ssw0rd') ||
  //  (data.login == 'User' && data.password == 'P@ssw0rd'))
  //  {
  //   var token = 'tempToken'; // TODO
  //   var role = data.login; // TODO удалить заглушку
      localStorage.setItem('CRM-jwt-client', token)
      localStorage.setItem('role', role);
      setAuthToken(token)
      history.push('/')
   //}
      return data.data
   })
}

export const apiLogout = () => {
  return axios.get(logout_url).then(data => {
    localStorage.removeItem('CRM-jwt-client')
    localStorage.removeItem('role')
    setAuthToken(false)
    history.go(0)
  })
}
