import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/AuthReducer';
import { requeredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';
import styles from '../Login/Login.module.css';

const LoginForm = (props) => {    
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                {/* <input type="text" placeholder="login" /> */}
                <Field placeholder="login" component={Input} name="login" validate={[requeredField]} />
            </div>
            <div>
                {/* <input type="text" placeholder="password" /> */}
                <Field placeholder="password" component={Input} name="password" validate={[requeredField]} />
            </div>
            <div>
                {/* <input type="checkbox" placeholder="remember me" /> Remember me */}
                <Field placeholder="remember me" component={Input} type="checkbox" name="rememberMe" /> Remember me
            </div>
            {
                props.error &&
                <div className={styles.formSummaryError}>
                    {props.error}
                </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm(
    { form: 'login' }
)(LoginForm)

const Login = (props) => {    

    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe);
        console.log(formData);
    }

    if (props.isAuth) {
        return <Redirect to="/Profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxFrom onSubmit={onSubmit} />
        </div>
    );
}

const mapStateToProps = (state) => (
    { isAuth: state.authInfo.isAuth }
)

export default connect(mapStateToProps, { loginThunkCreator })(Login);
