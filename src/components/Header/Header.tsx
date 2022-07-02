import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logout } from '../../redux/auth-reducer';

export function Header(props: any) {
    const dispatch = useDispatch()
    const logoutHandler = () => dispatch(logout())
    return (
        <header className={classes.header}>
            <img className={classes.app_logo} src="https://www.pinclipart.com/picdir/big/373-3735542_phoenix-banfield-illustration-clipart.png" alt="logo"/>

            <nav className="text-center space-x-20">
                <NavLink to={'/main'} className="font-semibold" activeClassName={classes.active}>
                    Главная
                </NavLink>
                <NavLink to={'/news'} className="font-semibold" activeClassName={classes.active}>
                    Новости
                </NavLink>
                {props.login
                    ? <NavLink to={''} className="font-semibold" onClick={logoutHandler}>
                        Выйти
                      </NavLink>
                    : <NavLink to={'/login'} className="font-semibold" activeClassName={classes.active}>
                        Войти / Зарегистрироваться
                      </NavLink>
                }
            </nav>
        </header>
    );
}