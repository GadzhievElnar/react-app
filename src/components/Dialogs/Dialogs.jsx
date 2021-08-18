import React from 'react';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = props.messages.map(message => <Message id={message.id} message={message.message} />);
    
    let onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
     }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>

            <textarea value={props.newMessageText}
                      onChange={onNewMessageTextChange}>

            </textarea>
            <button onClick={props.addMessage}>Add message</button>
        </div>
    );
}

export default Dialogs;