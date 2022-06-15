import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={'Логин'} component={'input'} />
            </div>
            <div>
                <Field name={'password'} placeholder={'Пароль'} type="password" component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type="checkbox" component={'input'} /> Запомнить меня
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