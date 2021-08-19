const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const addPost = (state) => {
    let newPost = {
        id: 11,
        message: state.newPostText,
        likesCount: 0
    };

    state.posts.push(newPost);
    state.newPostText = '';
}

const updateNewPostText = (state, newText) => {
    state.newPostText = newText;
}


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It`s my first post', likesCount: 20 },
    { id: 2, message: 'Array method MAP', likesCount: 10 }
  ],
  newPostText: 'it-kamasutra'
}

const ProfileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            addPost(state);
            break;
        case UPDATE_NEW_POST_TEXT:
            updateNewPostText(state, action.newText);
            break;
        default:
            break;
    }

    return state;
}



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

export default ProfileReducer;