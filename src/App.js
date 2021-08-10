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


const App = (props) => {  
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar state={props.appState.navBar}/>
        <div className='app-wrapper-content'>          
          <Route render={() => <Profile state={props.appState.profilePage} addPost={props.addPost}/>} path='/Profile'/>          
          <Route render={() => <Dialogs state={props.appState.dialogsPage}/>} path='/Dialogs'/>     
          <Route component={News} path='/News' />
          <Route component={Music} path='/Music' />
          <Route component={Settings} path='/Settings' /> 
        </div>
      </div>
  );
}

export default App;

