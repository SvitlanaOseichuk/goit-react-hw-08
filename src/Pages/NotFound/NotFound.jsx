import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import css from './NotFound.module.css'
import { Helmet } from 'react-helmet-async'



const NotFound = () => {

  const location = useLocation();
  const backLinkHref = useRef(location.state ?? '/')

  return (
  
    <div>
       <Helmet>
         <title>Not Found Page</title>
      </Helmet>

    <p>
      Not found page, please try again or 
      <NavLink className={css.backBtn} to={backLinkHref.current}> Go home </NavLink>
    </p> 
    
    </div>

   
  )
}

export default NotFound