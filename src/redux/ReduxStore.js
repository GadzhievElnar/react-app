import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import DialogsReducer from "./DialogsReducer";
import NavBarReducer from "./NavBarReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import AppReducer from "./AppReducer";

import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

//combine - сочетать, комбинировать, совмещать, объединять
//в функцию нужно передать объект состоящий из полей
//где имя поля это имя куска state а его значение это reducer который за этот кусок отвечает

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        navBar: NavBarReducer,
        usersPage: UsersReducer,
        authInfo: AuthReducer,
        app: AppReducer,
        form: formReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.___store___ = store;
export default store;