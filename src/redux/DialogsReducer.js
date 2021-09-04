const ADD_MESSAGE = 'ADD-MESSAGE';

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
  ]
}

const DialogsReducer = (state = initialState, action) => {  

  switch (action.type) {
    case ADD_MESSAGE:
      
      let newMessage =
      {
        id: 1,
        message: action.newMessageText
      };
      
      return {
        ...state,
        messages: [...state.messages, newMessage]        
      }  
   
      default:
        return state      
  }
}


export const addMessageActionCreator = (text) => {
  return (
    {
      type: ADD_MESSAGE,
      newMessageText: text
    }
  )
}

export default DialogsReducer;

