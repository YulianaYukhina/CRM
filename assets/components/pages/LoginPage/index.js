import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login'

import leftColumnImage from '../../../images/Building.jpg'
import { Container, FirstColumn, SecondColumn } from './styled'

const LoginPage = () => {
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('CRM-jwt-client')) {
      setRedirect(true)
    }
  }, [])

  if (redirect) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <FirstColumn>
        <Login />
      </FirstColumn>
      
        <SecondColumn image={`url(${leftColumnImage})`} />
      
    </Container>
  )
}

export default LoginPage
