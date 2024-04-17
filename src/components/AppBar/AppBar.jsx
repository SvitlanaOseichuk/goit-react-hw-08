import React from 'react'
import Navigation from '../Navigation/Navigation '
import AuthNav from '../AuthNav/AuthNav'
import css from './AppBar.module.css'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn} from '../../redux/auth/selectors'
import { UserMenu } from '../UserMenu/UserMenu'

const AppBar = () => {

  const IsLoggedIn = useSelector(selectIsLoggedIn);


  return (
    <header className={css.header}>

       <Navigation />
       {IsLoggedIn ? <UserMenu /> : <AuthNav />}

    </header>
  )
}

export default AppBar