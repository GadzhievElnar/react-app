import { stopSubmit } from 'redux-form';
import { authAPI } from '../API/api'

const SET_USER_DATA = 'SET_USER_DATA';

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

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    debugger;
    authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    debugger;
                    dispatch(setAuthUserData(
                        data.data.id,
                        data.data.email,
                        data.data.login, 
                        true));
            }
        }

        );
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
    .then(data => { debugger;
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
    })
}

export const logOutThunkCreator = () => (dispatch) => {
    authAPI.logout()
    .then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}

export default AuthReducer;