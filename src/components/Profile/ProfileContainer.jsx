import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

import { setUserProfileThunkCreator } from './../../redux/ProfileReducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userID;
        if(!userId){userId=2;}
        this.props.setUserProfileThunkCreator(userId);    
    }
    
    render(){
        debugger;
        if(!this.props.isAuth)
        {
            return <Redirect to="/Login"/>
        }
        
        return <Profile {...this.props}></Profile>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.authInfo.isAuth
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileThunkCreator})(WithUrlDataContainerComponent);