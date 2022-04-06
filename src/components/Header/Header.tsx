import React from 'react';
import classes from './Header.module.css';

export function Header() {
    return (
        <header className={classes.header}>
            <img className={classes.app_logo} src="https://www.pinclipart.com/picdir/big/373-3735542_phoenix-banfield-illustration-clipart.png" alt="logo"/>

            <nav className="text-center">
                <a href="/">Главная</a> | <a href="/news">Новости</a> | <a href="/about">Контакты</a>
            </nav>
        </header>
    );
}