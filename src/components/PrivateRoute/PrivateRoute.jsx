import React from 'react'
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';



const PrivateRoute = ({children, redirectTo = '/login'}) => {

  const isLoggedIn = useSelector(selectIsLoggedIn)
//   const isRefreshing = useSelector(selectIsRefreshing)


  return isLoggedIn ? children : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute