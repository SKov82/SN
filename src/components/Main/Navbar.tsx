import React from 'react';
import classes from './Navbar.module.css';

export function Navbar() {
    return (
        <aside className={classes.sidebar}>
            <nav>
                <ul>
                    <li><a href="/profile">Профиль</a></li>
                    <li><a href="/dialogs">Сообщения</a></li>
                    <li><a href="/friends">Друзья</a></li>
                    <li><a href="/groups">Группы</a></li>
                    <li><a href="/settings">Настройки</a></li>
                </ul>
            </nav>
        </aside>
    );
}
