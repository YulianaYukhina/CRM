// код котрый создает хранилища редакса

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import studentList from './studentList'

export default combineReducers({
  routing: routerReducer,
    studentList,
})
