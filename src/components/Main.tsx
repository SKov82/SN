import React from 'react';
import './Main.css';

export function Main() {
    return (
        <div className="container">
            <aside className="sidebar">
                <nav>
                    <ul>
                        <li><a href="#">Профиль</a></li>
                        <li><a href="#">Сообщения</a></li>
                        <li><a href="#">Друзья</a></li>
                        <li><a href="#">Группы</a></li>
                        <li><a href="#">Настройки</a></li>
                    </ul>
                </nav>
            </aside>

            <div className="content">
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS/SASS</li>
                    <li>JS/TS</li>
                    <li>React/Vue</li>
                    <li>Python</li>
                    <li>Django</li>
                </ul>
            </div>
        </div>
    );
}