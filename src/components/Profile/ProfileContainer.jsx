import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

import { setUserProfile } from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userID;
        if(!userId){userId=2;}
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                debugger;
                this.props.setUserProfile(response.data);
            });
    }
    
    render(){
        debugger;
        return <Profile {...this.props}></Profile>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);