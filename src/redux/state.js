const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addPostActionCreator = () => {
  return (
    {
      type: ADD_POST
    }
  )
}

export const updateNewPostTextActionCreator = (text) => {
  return (
    {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  )
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


let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It`s my first post', likesCount: 20 },
        { id: 2, message: 'Array method MAP', likesCount: 10 }
      ],
      newPostText: 'it-kamasutra'
    },

    dialogsPage: {
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
    },

    navBar: {
      friends: [
        { id: 1, name: 'Tania', srcImg: 'https://e7.pngegg.com/pngimages/634/109/png-clipart-spongebob-squarepants-season-1-nicktoons-drawing-spongebob-miscellaneous-vehicle.png' },
        { id: 2, name: 'Artem', srcImg: 'https://yt3.ggpht.com/ytc/AKedOLQydUlitSMvQ6lobyiynM0Dmu56FOz2tDEQkzVa=s900-c-k-c0x00ffffff-no-rj' },
      ]
    }
  },

  _addPost() {
    debugger;
    let newPost = {
      id: 11,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callObserver(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callObserver(this._state);
  },

  _addMessage() {
    let newMessage =
    {
      id: 1,
      message: this._state.dialogsPage.newMessageText
    };

    this._state.dialogsPage.messages.push(newMessage);

    this._state.dialogsPage.newMessageText = '';

    this._callObserver(this._state);
  },

  _updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callObserver(this._state);
  },

  _callObserver() {
    console.log('store callObserver');
  },

  subscribe(observer) {
    this._callObserver = observer;
  },

  getState() {
    return this._state;
  },

  //у action обязательно свойство type
  dispatch(action) {
    switch (action.type) {
      case ADD_POST: this._addPost(); break;
      case UPDATE_NEW_POST_TEXT: this._updateNewPostText(action.newText); break;
      case ADD_MESSAGE: this._addMessage(); break;
      case UPDATE_NEW_MESSAGE_TEXT: this._updateNewMessageText(action.newText); break;
      default: break;
    }
  }
}

window.state = store.getState();

export default store;