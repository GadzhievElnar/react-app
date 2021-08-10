import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



export let RenderEntireTree = (state, addPost) => {
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App appState={state} addPost={addPost}/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
}