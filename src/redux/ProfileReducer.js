import {profileAPI} from '../API/api';

const ADD_POST = 'samurai-network/profile/ADD-POST';
const SET_USER_PROFILE = 'samurai-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'samurai-network/profile/SET_STATUS';
const DELETE_POST_BY_ID = 'samurai-network/profile/DELETE_POST_BY_ID';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It`s my first post', likesCount: 20 },
    { id: 2, message: 'Array method MAP', likesCount: 10 }
  ],
  profile: null,
  status: ''
}

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST:
      let newPost = {
        id: 11,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
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

    case DELETE_POST_BY_ID:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }

    default:
      return state;
  }
  
}



export const addPostActionCreator = (text) => {
  return (
    {
      type: ADD_POST,
      newPostText: text
    }
  )
}

export const deletePostActionCreator = (id) => {
  return (
    {
      type: DELETE_POST_BY_ID,
      postId: id
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

export const setUserProfileThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
} 

export const setStatusThunkCreator = (userId) => async (dispatch) => {
  let status = await profileAPI.getStatus(userId);
  dispatch(setStatusActionCreator(status.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
    
  if (response.data.resultCode === 0)
  {
    dispatch(setStatusActionCreator(status));
  }   
}

export default ProfileReducer;