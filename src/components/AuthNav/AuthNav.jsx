import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'
import clsx from 'clsx'

const AuthNav = () => {

  const ActiveLink =({ isActive }) => 
  clsx(css.headerLink, {
    [css.active] : isActive,
  }) 

  return (
    <div className={css.Links}>
      <NavLink to='/register' className={ActiveLink}> Registration </NavLink>
      <NavLink to='/login' className={ActiveLink}> Login </NavLink>
    </div>
  )
}

export default AuthNav
