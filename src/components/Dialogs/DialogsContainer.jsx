import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import WithAuthRedirect from '../../HOC/WithAuthRedirect';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
         }
    }
}

let DialogsRedirectComponent = WithAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirectComponent)

export default DialogsContainer;