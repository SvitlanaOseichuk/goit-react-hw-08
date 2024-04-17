import React from 'react'
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';



const RestritedRoute = ({children, redirectTo = '/contacts'}) => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
}

export default RestritedRoute