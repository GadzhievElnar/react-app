import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let RenderEntireTree = (state) => {
  debugger;
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App appState={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

RenderEntireTree(store.getState());

store.subscribe(RenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
