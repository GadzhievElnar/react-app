import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import NavBarReducer from "./NavBarReducer";
import ProfileReducer from "./ProfileReducer";

//combine - сочетать, комбинировать, совмещать, объединять
//в функцию нужно передать объект состоящий из полей
//где имя поля это имя куска state а его значение это reducer который за этот кусок отвечает
debugger;
let reducers = combineReducers(
    {
        profilePage: ProfileReducer,
        dialogsPage: DialogsReducer,
        navBar: NavBarReducer
    }
);

let store = createStore(reducers);

export default store;