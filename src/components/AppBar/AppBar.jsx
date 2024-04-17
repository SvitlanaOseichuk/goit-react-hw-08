// Створення компонента AppBar:

// AppBar рендерить компонент навігації (Navigation) 
// і AuthNav або UserMenu
//  в залежності від статусу авторизації користувача.


// тобто ми тут рендеримо компоенти 
// а в тих компонентах ренеримо лише ті компоненти
// які вних потрібно


// приклад:
// return (
//     <header>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </header>
//   );

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