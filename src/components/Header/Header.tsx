import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

export function Header(props: any) {
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
                    ? <span className="font-semibold">{props.login}</span>
                    : <NavLink to={'/login'} className="font-semibold" activeClassName={classes.active}>
                        Войти / Зарегистрироваться
                    </NavLink>

                }

            </nav>
        </header>
    );
}