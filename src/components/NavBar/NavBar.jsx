import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
console.log(styles);

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/Profile' activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                {/* <a href='/Dialogs'>Messages</a> */}
                <NavLink to='/Dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/News' activeClassName={styles.activeLink}>News</NavLink>
                {/* <a href='/News'>News</a> */}
            </div>
            <div className={styles.item}>
                <NavLink to='/Music' activeClassName={styles.activeLink}>Music</NavLink>
                {/* <a href='/Music'>Music</a> */}
            </div>
            <div className={styles.item}>
                <NavLink to='/Settings' activeClassName={styles.activeLink}>Settings</NavLink>
                {/* <a href='/Settings'>Settings</a> */}
            </div>
        </nav>
    );
}

export default NavBar;