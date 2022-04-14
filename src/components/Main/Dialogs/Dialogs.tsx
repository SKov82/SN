import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {Messages} from './Messages';

type DialogType = {
    id: number
    name: string
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

export function Dialogs() {
    let dialogs: Array<DialogType> = [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Юля'},
        {id: 3, name: 'Вова'},
        {id: 4, name: 'Миша'},
    ]
    let dialogsElements = dialogs.map(el => <Dialog id={el.id} name={el.name}/>)

    return (
        <div className={css.content}>
            <div className={css.chats}>
                <div>Чаты</div>

                <nav className="grid grid-cols-1 gap-4 pl-7 pt-7">
                    {dialogsElements}
                </nav>
            </div>

            <div className={css.messages}>
                <Messages/>
            </div>
        </div>
    )
}