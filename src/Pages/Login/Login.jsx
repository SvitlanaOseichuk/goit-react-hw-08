import React from 'react'
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/operation';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {

  const dispatch = useDispatch();

  
  const onLogin = (FormData) => {
    dispatch(apiLoginUser(FormData))
    
  }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm onLogin={onLogin} />

    </div>
  )
}

export default LoginPage