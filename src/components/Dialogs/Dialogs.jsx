import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requeredField } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './Dialog/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Mesage/Message';

const maxLength30 = maxLengthCreator(30);
const NewMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newMessageText' placeholder="Новое сообщение" validate={[requeredField, maxLength30]}/>
            <button onSubmit={props.handleSubmit}>Add message</button>
        </form>
    )
}

const NewMessageReduxFrom = reduxForm( 
    { form: 'newMessage'}
)(NewMessageForm)

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

    let messagesElements = props.messages.map(message => <Message id={message.id} message={message.message} />);
    
     if (props.isAuth == false) 
     {
        return <Redirect to="/Login" />;
     }

     const onSubmit = (formData) => {
        console.log(formData);        
         props.addMessage(formData.newMessageText);
        
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>

            <NewMessageReduxFrom onSubmit={onSubmit}/>
        </div>
    );
}

export default Dialogs;