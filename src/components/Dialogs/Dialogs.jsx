import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
debugger;
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = state.messages.map(message => <Message id={message.id} message={message.message} />);
    
    let addMes = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let onNewMessageTextChange = (e) => {
        let mes = e.target.value;
        let action = updateNewMessageTextActionCreator(mes);
        props.store.dispatch(action);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>

            <textarea value={state.newMessageText}
                      onChange={onNewMessageTextChange}>

            </textarea>
            <button onClick={addMes}>Add message</button>
        </div>
    );
}

export default Dialogs;