import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/api'

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userData}
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return { type: SET_USER_DATA, userData: { userId, email, login, isAuth } }
}

export const getAuthUserDataThunkCreator = () => async (dispatch) => {    
    let data = await authAPI.me();    
        
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(
            data.data.id,
            data.data.email,
            data.data.login,
            true));
    }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    
    if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
    }
    else
    { 
        console.log(data);
        let message = data.messages.length > 0 ? data.messages[0] : "";
        let action = stopSubmit("login", {_error: message})
        dispatch(action);
    }    
}

export const logOutThunkCreator = () => async (dispatch) => {
    let data = await authAPI.logout();

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default AuthReducer;