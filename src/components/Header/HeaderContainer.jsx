import React from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator, logOutThunkCreator } from '../../redux/AuthReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {       
        this.props.getAuthUserDataThunkCreator();         
    }


    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    authInfo: state.authInfo
})

export default connect(mapStateToProps, 
    { getAuthUserDataThunkCreator, 
        logOutThunkCreator })(HeaderContainer)