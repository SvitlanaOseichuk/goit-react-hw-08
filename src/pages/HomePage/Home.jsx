import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import css from './Home.module.css'
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const user = useSelector(selectUser);
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
       {IsLoggedIn ?
         (<p className={css.welcoming}>Welcome, {user.name}</p>)
        :
         (<p className={css.welcoming}> Dear User, login or register an account</p>)}
      
    </div>
  )
}

export default Home
