import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import WithAuthRedirect from '../../HOC/WithAuthRedirect';
import { addMessageActionCreator } from '../../redux/DialogsReducer';
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
        addMessage: (text) => {
            let action = addMessageActionCreator(text);
            dispatch(action);
        }
    }
}
//,
const DialogsContainer = compose(WithAuthRedirect,
        connect(mapStateToProps, mapDispatchToProps))(Dialogs);

// let DialogsRedirectComponent = WithAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirectComponent)

export default DialogsContainer;