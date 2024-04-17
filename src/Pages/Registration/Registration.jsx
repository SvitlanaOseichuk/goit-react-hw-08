import React from 'react'
import { useDispatch } from 'react-redux'
import RegisterForm from '../../components/RegistrationForm/RegistrationForm';
import { apiRegisterUser } from '../../redux/auth/operation';
import { Helmet } from 'react-helmet-async';

const Registration = () => {

  const dispatch = useDispatch();
  

  const onRegister = (FormData) => {
    dispatch(apiRegisterUser(FormData))
    
  }


  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm onRegister={onRegister} />

    </div>
  )
}

export default Registration