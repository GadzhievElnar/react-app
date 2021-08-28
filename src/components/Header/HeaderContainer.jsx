import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(
                        response.data.data.id,
                        response.data.data.email,
                        response.data.data.login);
                }
            })}


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    authInfo: state.authInfo
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)