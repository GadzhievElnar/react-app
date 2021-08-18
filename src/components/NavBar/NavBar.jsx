import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsPanel from './FriendsPanel/FriendsPanel';
import styles from './NavBar.module.css';
console.log(styles);

const NavBar = (props) => {

    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/Profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to='/Dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/News' activeClassName={styles.activeLink}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Music' activeClassName={styles.activeLink}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/Settings' activeClassName={styles.activeLink}>Settings</NavLink>
            </div>

            <FriendsPanel store={props.store}></FriendsPanel>
        </nav>
    );
}

export default NavBar;