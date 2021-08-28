import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';

 const Header = (props) => {
     return(
        <header className={styles.header}>
            <div className={styles.loginBlock}>
                {
                    props.authInfo.isAuth ? props.authInfo.login  : <NavLink  to='/login'>Login</NavLink>
                }
                 
            </div>
        </header>
     );
 }

 export default Header;