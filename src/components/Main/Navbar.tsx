import React from 'react';
import classes from './Navbar.module.css';

export function Navbar() {
    return (
        <aside className={classes.sidebar}>
            <nav>
                <ul>
                    <li><a href="/profile">Профиль</a></li>
                    <li><a href="/dialogs">Сообщения</a></li>
                    <li><a href="#">Друзья</a></li>
                    <li><a href="#">Группы</a></li>
                    <li><a href="#">Настройки</a></li>
                </ul>
            </nav>
        </aside>
    );
}
