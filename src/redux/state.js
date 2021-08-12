import { RenderEntireTree } from "./../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It`s my first post', likesCount: 20},
            {id: 2, message: 'Array method MAP', likesCount: 10}         
          ],
          newPostText: 'it-kamasutra'
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Tania'},
            { id: 2, name: 'Artur'},
            { id: 3, name: 'Zhenia'},
            { id: 4, name: 'ANCH'},
            { id: 5, name: 'Lena'},
            { id: 6, name: 'Natasha'},
            { id: 7, name: 'Stas'},
          ],
    
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How are you?'},
            {id: 1, message: 'Yo'},
            {id: 1, message: 'Hi'},
            {id: 1, message: 'Ee'},
            {id: 1, message: 'Yo'}
          ],

          newMessageText: ''
    },

    navBar: {
      friends: [
        {id: 1, name: 'Tania', srcImg: 'https://e7.pngegg.com/pngimages/634/109/png-clipart-spongebob-squarepants-season-1-nicktoons-drawing-spongebob-miscellaneous-vehicle.png'},
        {id: 2, name: 'Artem', srcImg: 'https://yt3.ggpht.com/ytc/AKedOLQydUlitSMvQ6lobyiynM0Dmu56FOz2tDEQkzVa=s900-c-k-c0x00ffffff-no-rj'},
      ]
    }
}


export let addPost = () => {
  let newPost = {
    id: 11,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  callRender();
} 

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  callRender();
}


export let addMessage = () => {
  debugger;
  let newMessage = {id: 1, message: state.dialogsPage.newMessageText};

  state.dialogsPage.messages.push(newMessage);

  state.dialogsPage.newMessageText = '';

  callRender();
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  callRender();
}

function callRender(){
  RenderEntireTree(state, addPost, updateNewPostText, addMessage, updateNewMessageText);  
}

window.state = state;

export default state;