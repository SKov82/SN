import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    text: string
}

function Dialog(props: DialogType) {
    return (
        <NavLink to={`/dialogs/${props.id}`}
                 className="font-semibold hover:scale-105 hover:skew-y-2"
                 activeClassName={css.active}>
            {props.name}
        </NavLink>
    )
}

function Message(props: MessageType) {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    )
}

export function Dialogs() {
    let dialogs = [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Юля'},
        {id: 3, name: 'Вова'},
        {id: 4, name: 'Миша'},
    ]
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>)

    let messages = [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Ты дома?'},
        {id: 3, text: 'Привет. Да, только пришел'},
    ]
    let messagesElements = messages.map(el => <Message id={el.id} text={el.text}/>)

    return (
        <div className={css.content}>
            <div className={css.chats}>
                <div>Чаты</div>

                <nav className="grid grid-cols-1 gap-4 pl-7 pt-7">
                    {dialogsElements}
                </nav>
            </div>

            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    )
}