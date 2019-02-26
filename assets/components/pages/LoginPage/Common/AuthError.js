import React from 'react'

type AuthErrorProps = {
  message: string,
}

const AuthError = ({ message }: AuthErrorProps) => {
  return (
    <div className="auth-errors">
      <div>{message}</div>
    </div>
  )
}

export default AuthError
