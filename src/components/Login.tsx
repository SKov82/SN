import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, requiredField} from '../validators/validators';
import {Input} from './FormControls/FormController';

const minLoginLength = minLengthCreator(4)
const maxLoginLength = maxLengthCreator(32)
const minPasswordLength = minLengthCreator(8)
const maxPasswordLength = maxLengthCreator(64)
const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Логин'}
                       component={Input}
                       validate={[requiredField, minLoginLength, maxLoginLength]}
                />
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Пароль'}
                       type="password"
                       component={Input}
                       validate={[requiredField, minPasswordLength, maxPasswordLength]}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type="checkbox"
                       component={'input'}
                /> Запомнить меня
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginC = reduxForm({form: 'login'}) (LoginForm)

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return <div>
        <strong>Авторизуйтесь</strong>
        <LoginC onSubmit={onSubmit} />
    </div>
};