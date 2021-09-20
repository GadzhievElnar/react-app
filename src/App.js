import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
//import News from './components/News/News';

//import Music from './components/Music/Music';

import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator } from './redux/AuthReducer';
import { initializeThunkCreator } from './redux/AppReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import { Suspense } from 'react';
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {
  componentDidMount() {       
    this.props.initializeThunkCreator();         
  }

  render() {
    if (!this.props.initialized)
    {
      return <Preloader />
    }
    else  
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route render={() => <ProfileContainer />} path='/Profile/:userID?/:newParam?' />
          <Route render={() => <DialogsContainer />} path='/Dialogs' />
          <Route render={() => <Suspense fallback={<div>Загрузка...</div>}>
                                  <News />
                                </Suspense>} path='/News' />
          <Route render={() => <Suspense fallback={<div>Загрузка...</div>}>
            <Music />
          </Suspense>} path='/Music' />          
          {/* <Route component={News} path='/News' /> */}
          {/* <Route component={Music} path='/Music' /> */}
          <Route component={Settings} path='/Settings' />
          <Route render={() => <UsersContainer />} path='/Users' />

          <Route component={Login} path='/Login' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(withRouter, 
                       connect(mapStateToProps, { getAuthUserDataThunkCreator, initializeThunkCreator }))(App)

