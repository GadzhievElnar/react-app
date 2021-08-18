import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {  
  return (
    
      <div className='app-wrapper'>
        <Header />
        <NavBar store={props.store}/>
        <div className='app-wrapper-content'>          
          <Route render={() => <Profile store={props.store} />} path='/Profile'/>          
          <Route render={() => <Dialogs store={props.store} />} path='/Dialogs'/>     
          <Route component={News} path='/News' />
          <Route component={Music} path='/Music' />
          <Route component={Settings} path='/Settings' /> 
        </div>
      </div>
  );
}

export default App;

