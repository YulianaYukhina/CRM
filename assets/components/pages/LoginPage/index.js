// страница логина
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Login from './Login' // левая колонка(поля для входа)

import leftColumnImage from '../../../images/Building.jpg' // картинка(справа)
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
