// код котрый создает хранилища редакса

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import projects from './project'

export default combineReducers({
  routing: routerReducer,
    projects,
})
