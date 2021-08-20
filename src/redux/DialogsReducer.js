const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Tania' },
    { id: 2, name: 'Artur' },
    { id: 3, name: 'Zhenia' },
    { id: 4, name: 'ANCH' },
    { id: 5, name: 'Lena' },
    { id: 6, name: 'Natasha' },
    { id: 7, name: 'Stas' },
  ],

  messages: [
    { id: 1, message: 'Hi' },
    { id: 1, message: 'How are you?' },
    { id: 1, message: 'Yo' },
    { id: 1, message: 'Hi' },
    { id: 1, message: 'Ee' },
    { id: 1, message: 'Yo' }
  ],

  newMessageText: ''
}

const DialogsReducer = (state = initialState, action) => {
  let newState = {...state};
  
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage =
      {
        id: 1,
        message: newState.newMessageText
      };

      newState.messages.push(newMessage);

      newState.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      newState.newMessageText = action.newText;
      break;
    default:
      break;
  }
  return newState;
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

