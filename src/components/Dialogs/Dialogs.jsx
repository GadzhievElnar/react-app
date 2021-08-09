import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );

    let messagesElements =  props.state.messages.map( message => <Message id={message.id} message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;

        alert(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>   
                { dialogsElements }                
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div> 

            <textarea ref={newMessageElement}>New message</textarea>           
            <button onClick={addMessage}>Add message</button>
        </div>
    );
}

export default Dialogs;