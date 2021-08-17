import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} /> );

    let messagesElements =  props.state.messages.map( message => <Message id={message.id} message={message.message} />);

    let newMessageElement = React.createRef();

    let addMes = () => { 
        let action = addMessageActionCreator();
        props.dispatch(action);               
    }

    let onNewMessageTextChange = () => {
        let action = updateNewMessageTextActionCreator(newMessageElement.current.value);
        props.dispatch(action);        
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>   
                { dialogsElements }                
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div> 

            <textarea ref={newMessageElement} 
            value={props.state.newMessageText} 
            onChange={onNewMessageTextChange}></textarea>           
            <button onClick={addMes}>Add message</button>
        </div>
    );
}

export default Dialogs;