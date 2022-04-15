import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {Messages} from './Messages';

export type DialogType = {
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

export function Dialogs(props: any) {
    let dialogsElements = props.dialogsData.dialogs.map((el: DialogType) => <Dialog key={el.id} id={el.id} name={el.name}/>)

    return (
        <div className={css.content}>
            <div className={css.chats}>
                <div>Чаты</div>

                <nav className="grid grid-cols-1 gap-4 pl-7 pt-7">
                    {dialogsElements}
                </nav>
            </div>

            <div className={css.messages}>
                <Messages messages={props.dialogsData.messages}/>
            </div>
        </div>
    )
}