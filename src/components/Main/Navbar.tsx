import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

export function Navbar() {
    return (
        <aside className={s.sidebar}>
            <nav className="grid grid-cols-1 gap-4 pl-7 pt-10">
                <NavLink to={'/profile'} className="font-semibold hover:scale-110 hover:skew-y-3">
                    Профиль
                </NavLink>
                <NavLink to={'/dialogs'} className="font-semibold hover:scale-110 hover:skew-y-3">
                    Сообщения
                </NavLink>
                <NavLink to={'/friends'} className="font-semibold hover:scale-110 hover:skew-y-3">
                    Друзья
                </NavLink>
                <NavLink to={'/groups'} className="font-semibold hover:scale-110 hover:skew-y-3">
                    Группы
                </NavLink>
                <NavLink to={'/settings'} className="font-semibold pt-7 hover:scale-110 hover:skew-y-3">
                    Настройки
                </NavLink>
            </nav>
        </aside>
    );
}
