import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.authInfo.isAuth
})

const WithAuthRedirect = (Component) => {
    let comp = (props) => {
        if(!props.isAuth)
        { return <Redirect to="/Login"/> }
    
        return <Component {...props} />
    }

    return connect(mapStateToProps)(comp)
}



export default WithAuthRedirect;