import React from 'react';
import classes from './Dialogs.module.css';

export function Dialogs(props:any) {
    return (
        <div className={classes.content}>
            <div className={classes.chats}>
                <div>Чаты</div>

                <ul>
                    <li>Ирина</li>
                    <li>Юля</li>
                    <li>Вова</li>
                    <li>Миша</li>
                </ul>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>
                    Привет
                </div>
                <div className={classes.message}>
                    Ты дома?
                </div>
                <div className={classes.message}>
                    Привет. Да, только пришел
                </div>
            </div>
        </div>
    )
}