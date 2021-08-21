import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import NavBarReducer from "./NavBarReducer";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";

//combine - сочетать, комбинировать, совмещать, объединять
//в функцию нужно передать объект состоящий из полей
//где имя поля это имя куска state а его значение это reducer который за этот кусок отвечает

let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        navBar: NavBarReducer,
        usersPage: UsersReducer
    }
);

let store = createStore(reducers);

window.store = store;
export default store;