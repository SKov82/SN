import React from 'react'
import css from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import { Messages } from './Messages'
import { DialogsDataType, DialogType } from '../../../redux/dialogs-reducer'

function Dialog({ id, name }: DialogType) {
    return (
        <NavLink
            to={`/dialogs/${id}`}
            className='font-semibold hover:scale-105 hover:skew-y-2'
            activeClassName={css.active}
        >
            {name}
        </NavLink>
    )
}

type DialogsType = {
    dialogsData: DialogsDataType
    addMessage: (newMessage: string) => void
}

export function Dialogs({ dialogsData, addMessage }: DialogsType) {
    let dialogsElements = dialogsData.dialogs.map((el: DialogType) => {
        return <Dialog key={el.id} id={el.id} name={el.name} />
    })

    return (
        <div className={css.content}>
            <div className={css.chats}>
                <div>Чаты</div>

                <nav className='grid grid-cols-1 gap-4 pl-7 pt-7'>{dialogsElements}</nav>
            </div>

            <div className={css.separator} />

            <div className={css.messages}>
                <Messages messages={dialogsData.messages} addMessage={addMessage} />
            </div>
        </div>
    )
}
