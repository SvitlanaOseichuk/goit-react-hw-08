import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from 'clsx'
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {

  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const ActiveLink =({ isActive }) => 
          clsx(css.headerLink, {
            [css.active] : isActive,
          }) 

  return (
     <div className={css.Links}>
       <NavLink className={ActiveLink} to='/'> Home </NavLink>
      {IsLoggedIn &&  <NavLink className={ActiveLink} to='/contacts'> Contacts </NavLink>} 
     </div>
  )
}


export default Navigation