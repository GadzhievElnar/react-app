import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requeredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../Login/Login.module.css';

const LoginForm = (props) => {
    debugger;
    return (
        
        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <input type="text" placeholder="login" /> */}
                <Field placeholder="login" component={Input} name="login" validate={[requeredField]}/>
            </div>
            <div>
                {/* <input type="text" placeholder="password" /> */}
                <Field placeholder="password" component={Input} name="password" validate={[requeredField]}/>
            </div>
            <div>
                {/* <input type="checkbox" placeholder="remember me" /> Remember me */}
                <Field placeholder="remember me" component={Input} type="checkbox" name="rememberMe"/> Remember me
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
