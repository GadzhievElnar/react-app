import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/DialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let addMessage = () => {
                        let action = addMessageActionCreator();
                        store.dispatch(action);
                    }

                    let updateNewMessageText = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);
                    }


                    return <Dialogs dialogs={state.dialogsPage.dialogs}
                                    messages={state.dialogsPage.messages}
                                    newMessageText={state.dialogsPage.newMessageText}
                                    addMessage={addMessage}
                                    updateNewMessageText={updateNewMessageText} />
                }
            }

        </StoreContext.Consumer>

    );
}

export default DialogsContainer;