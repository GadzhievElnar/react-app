import { getAuthUserDataThunkCreator } from "./AuthReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
}

const AppReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_INITIALIZED: 
        return {...state, initialized: true}
        
        default: return state;
    }
}

export const setInitialized = () => { return { type: SET_INITIALIZED }}

export const initializeThunkCreator = () => (dispatch) => {   
    let promise = dispatch(getAuthUserDataThunkCreator());
    
    Promise.all([promise]).then(() => { dispatch(setInitialized()); });    
}

export default AppReducer;