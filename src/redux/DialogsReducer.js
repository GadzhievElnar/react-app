const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const addMessage = (state) => {
    let newMessage =
    {
        id: 1,
        message: state.newMessageText
    };

    state.messages.push(newMessage);

    state.newMessageText = '';
}

const updateNewMessageText = (state, newText) => {
    state.newMessageText = newText;
}

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            addMessage(state);
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            updateNewMessageText(state, action.newText);
            break;
        default:
            break;
    }
    return state;
}


export const addMessageActionCreator = () => {
    return (
      {
        type: ADD_MESSAGE
      }
    )
  }
  
  export const updateNewMessageTextActionCreator = (text) => {
    return (
      {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
      }
    )
  }

export default DialogsReducer;

