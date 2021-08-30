import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../API/api';
import { setAuthUserData } from '../../redux/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        debugger;
        usersAPI.authMe()
         .then(data => {
             debugger;
             if (data.resultCode === 0) {
                 debugger;
                 this.props.setAuthUserData(
                     data.data.id,
                     data.data.email,
                     data.data.login);
             }
         }

         );
    }


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    authInfo: state.authInfo
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)