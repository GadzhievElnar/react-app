import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Hi, how are you?', likesCount: 15},
  {id: 2, message: 'It`s my first post', likesCount: 20},
  {id: 2, message: 'Array method MAP', likesCount: 10}         
];

let dialogsData = [
  { id: 1, name: 'Tania'},
  { id: 2, name: 'Artur'},
  { id: 3, name: 'Zhenia'},
  { id: 4, name: 'ANCH'},
  { id: 5, name: 'Lena'},
  { id: 6, name: 'Natasha'},
  { id: 7, name: 'Stas'},
];

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 1, message: 'How are you?'},
  {id: 1, message: 'Yo'},
  {id: 1, message: 'Hi'},
  {id: 1, message: 'Ee'},
  {id: 1, message: 'Yo'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
