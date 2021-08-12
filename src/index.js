import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewMessageText} from './redux/state';
import { RenderEntireTree } from "./render";

RenderEntireTree(state, addPost, updateNewPostText, addMessage, updateNewMessageText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
