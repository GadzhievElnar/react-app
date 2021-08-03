import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div><NavLink to='/Dialogs/1' className='dialog'>Tania</NavLink></div>
                <div><NavLink to='/Dialogs/2' className='dialog'>Artur</NavLink></div>
                <div><NavLink to='/Dialogs/3' className='dialog'>Zhenia</NavLink></div>
                <div><NavLink to='/Dialogs/4' className='dialog'>ANCH</NavLink></div>
                <div><NavLink to='/Dialogs/5' className='dialog'>Lena</NavLink></div>
                <div><NavLink to='/Dialogs/6' className='dialog'>Natasha</NavLink></div>
                <div><NavLink to='/Dialogs/7' className='dialog'>Stas</NavLink></div>
            </div>

            <div className={styles.messages}>
                <div className={styles.message}>Hi</div>
                <div className={styles.message}>How are you?</div>
                <div className={styles.message}></div>
                <div className={styles.message}></div>
                <div className={styles.message}></div>
            </div>            
        </div>
    );
}

export default Dialogs;