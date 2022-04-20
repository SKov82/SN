import css from './Messages.module.css';
import React from 'react';

export type MessageType = {
    id: number
    text: string
}

function Message({text}: MessageType) {
    return (
        <div className={css.message}>
            {text}
        </div>
    )
}

export function Messages({messages}: any) {
    return <>
        {messages.map((el: MessageType) => <Message key={el.id} id={el.id} text={el.text}/>)}
    </>
}

