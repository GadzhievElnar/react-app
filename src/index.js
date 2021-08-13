import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewMessageText} from './redux/state';
import {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let RenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
    );
    }

RenderEntireTree(state);

subscribe(RenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
