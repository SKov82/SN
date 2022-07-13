import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, minLengthCreator, requiredField} from '../validators/validators';
import {Input} from './FormControls/FormController';
import {useDispatch, useSelector} from 'react-redux';
import {AuthDataType, login} from '../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';
import style from '../components/FormControls/FormController.module.css'

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
            <div className={style.formAuthError}>
                {props.error}
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginC = reduxForm({form: 'login'}) (LoginForm)

export const Login = () => {
    const dispatch = useDispatch()
    const auth = useSelector<AppStateType, AuthDataType>(state => state.auth)
    const onSubmit = (formData: any) => dispatch(login(formData.login, formData.password, formData?.rememberMe))

    if (auth.isAuth) return <Redirect to={`/profile/${auth.data.id}`} />

    return <div>
        <strong>Авторизуйтесь</strong>
        <LoginC onSubmit={onSubmit} />
    </div>
};