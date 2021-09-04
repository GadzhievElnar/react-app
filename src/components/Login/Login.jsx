import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from '../Login/Login.module.css';

const LoginForm = (props) => {
    debugger;
    return (
        
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <input type="text" placeholder="login" /> */}
                <Field placeholder="login" component="input" name="login"/>
            </div>
            <div>
                {/* <input type="text" placeholder="password" /> */}
                <Field placeholder="password" component="input" name="password"/>
            </div>
            <div>
                {/* <input type="checkbox" placeholder="remember me" /> Remember me */}
                <Field placeholder="remember me" component="input" type="checkbox" name="rememberMe"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm( 
    { form: 'login'}
)(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;
