import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = () => {
  
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

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          {/* <Route component={Profile} path='/Profile'/> */}
          <Route render={() => <Profile posts={postsData}/>} path='/Profile'/>
          {/* <Route component={Dialogs} path='/Dialogs'/>     */}
          <Route render={() => <Dialogs dialogs={dialogsData} messages={messagesData}/>} path='/Dialogs'/>     
          <Route component={News} path='/News' />
          <Route component={Music} path='/Music' />
          <Route component={Settings} path='/Settings' /> 
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

