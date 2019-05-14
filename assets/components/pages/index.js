//@flow
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import { PrivateRoute } from '../layouts/PrivateRoute'
import LoginPage from './LoginPage'
import Error from './NotFound/NotFound'
import AdminCabinet from './AdminCabinet'
import UserCabinet from './UserCabinet'
import MainAdminCabinet from './MainAdminCabinet'

import { Container } from './styled'

const Pages = () => {
  const isAdmin = localStorage.getItem('role') == 'admin',
  isMainAdmin = localStorage.getItem('role') == 'mainAdmin';
  return (
    <Router>
      <Container>
        <Switch>
          <Redirect exact from="/" to="/Cabinet" />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/Cabinet" component={isAdmin ? AdminCabinet : isMainAdmin ? MainAdminCabinet : UserCabinet} />
          <Route component={Error}/>
        </Switch>
      </Container>
    </Router>
  )
}

export default Pages
