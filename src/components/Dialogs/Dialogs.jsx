import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    
    let dialogsData = [
        { id: 1, name: 'Tania'},
        { id: 2, name: 'Artur'},
        { id: 3, name: 'Zhenia'},
        { id: 4, name: 'ANCH'},
        { id: 5, name: 'Lena'},
        { id: 6, name: 'Natasha'},
        { id: 7, name: 'Stas'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Hi'},
        {id: 1, message: 'Ee'},
        {id: 1, message: 'Yo'}
    ];
    
    let dialogsElements = dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );

    let messagesElements =  messagesData.map( message => <Message id={message.id} message={message.message} />);

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