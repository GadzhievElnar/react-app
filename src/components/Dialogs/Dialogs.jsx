import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem id='1' name='Tania' />
                <DialogItem id='2' name='Artur' />
                <DialogItem id='3' name='Zhenia' />
                <DialogItem id='4' name='ANCH' />
                <DialogItem id='5' name='Lena' />
                <DialogItem id='6' name='Natasha' />
                <DialogItem id='7' name='Stas' />           
            </div>
            <div className={styles.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Yo'/>
                <Message message='Ee'/>
                <Message message='Yo'/>
            </div>            
        </div>
    );
}

export default Dialogs;