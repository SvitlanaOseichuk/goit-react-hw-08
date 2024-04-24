import { useDispatch} from "react-redux";
import css from './UserManu.module.css'
import { apiLogoutUser } from "../../redux/auth/operations";

export const UserMenu = () => { 
  
    const dispatch = useDispatch();

    const onLogout = () =>{
      dispatch(apiLogoutUser())
    }
  
    return (
      <div className={css.wrapper}>
        <button className={css.button} type="button" onClick={onLogout} >
          Logout
        </button>
      </div>
    );
  };

