import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );

    let messagesElements =  props.messages.map( message => <Message id={message.id} message={message.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>   
                { dialogsElements }                
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>            
        </div>
    );
}

export default Dialogs;