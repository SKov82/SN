import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

export function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.app_logo} src="https://www.pinclipart.com/picdir/big/373-3735542_phoenix-banfield-illustration-clipart.png" alt="logo"/>

            <nav className="text-center space-x-20">
                <NavLink to={'/'} className="">Главная</NavLink>
                <NavLink to={'/news'} className=""> Новости</NavLink>
                <NavLink to={'/about'} className=""> Контакты</NavLink>
            </nav>
        </header>
    );
}