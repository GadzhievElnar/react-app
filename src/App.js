import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {  
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>          
          <Route render={() => <ProfileContainer />} path='/Profile/:userID?/:newParam?'/>          
          <Route render={() => <DialogsContainer />} path='/Dialogs'/>     
          <Route component={News} path='/News' />
          <Route component={Music} path='/Music' />
          <Route component={Settings} path='/Settings' /> 
          <Route render={() => <UsersContainer />} path='/Users' /> 
        </div>
      </div>
  );
}

export default App;

