import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={`/Dialogs/${props.id}`} className='dialog'>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;