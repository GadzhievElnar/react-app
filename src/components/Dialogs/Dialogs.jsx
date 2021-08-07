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

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>            
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />           
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>            
        </div>
    );
}

export default Dialogs;