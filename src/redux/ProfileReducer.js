import {profileAPI} from '../API/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It`s my first post', likesCount: 20 },
    { id: 2, message: 'Array method MAP', likesCount: 10 }
  ],
  newPostText: 'it-kamasutra',
  profile: null,
  status: ''
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST:
      let newPost = {
        id: 11,
        message: state.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }

    case SET_STATUS:
        return {
          ...state,
          status: action.status
        }

    default:
      return state;
  }
  
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

export const setStatusActionCreator = (status) => {
  return (
    { 
      type: SET_STATUS,
      status: status
    }
  );
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then( data => dispatch(setUserProfile(data)));
} 

export const setStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(status => dispatch(setStatusActionCreator(status.data)));
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(
    response => {
      debugger;
      if (response.data.resultCode === 0)
      {
        dispatch(setStatusActionCreator(status));
      }
    }
  )
}

export default ProfileReducer;