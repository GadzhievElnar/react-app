import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

import { setUserProfile } from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../API/api';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userID;
        if(!userId){userId=2;}
        usersAPI.getProfile(userId).then( data => this.props.setUserProfile(data))
    }
    
    render(){
        return <Profile {...this.props}></Profile>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);