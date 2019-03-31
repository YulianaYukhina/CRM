// запросы к серверу(на котроле user)
import axios from 'axios'
import { setAuthToken } from '../axiosExtensions'
import history from '../history'

const login_url = '/user/login'
const logout_url = '/user/logout'
const test_url = '/testLogin'

const CHECK_EXIST_LOGIN = '/user/checkExistLogin'

export const apiCheckExistLogin = login =>
  axios.get(CHECK_EXIST_LOGIN, { params: { login: login } })

export const apiLogin = async data => {
   return axios.post(login_url, data).then(data => {
     const { token, role } = data.data
      localStorage.setItem('CRM-jwt-client', token)
      localStorage.setItem('role', role);
      setAuthToken(token)
      history.push('/')
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
