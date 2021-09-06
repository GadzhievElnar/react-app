import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

import { setUserProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator } from './../../redux/ProfileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import WithAuthRedirect from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId = this.props.match.params.userID;
        if(!userId){userId=this.props.myUserId;}
        this.props.setUserProfileThunkCreator(userId);    
        this.props.setStatusThunkCreator(userId);
    }
    
    render(){ 
        return <Profile {...this.props}></Profile>
    }
}




let mapStateToProps = (state) => ({
    myUserId: state.authInfo.userId,
    profile: state.profilePage.profile, 
    status: state.profilePage.status   
})

export default compose(
    WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setUserProfileThunkCreator, setStatusThunkCreator, updateStatusThunkCreator})
)(ProfileContainer);

// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {setUserProfileThunkCreator})(WithUrlDataContainerComponent);