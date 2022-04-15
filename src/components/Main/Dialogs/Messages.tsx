import css from './Messages.module.css';
import React from 'react';

export type MessageType = {
    id: number
    text: string
}

function Message(props: MessageType) {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    )
}

export function Messages(props: any) {
    return <>
        {props.messages.map((el: MessageType) => <Message key={el.id} id={el.id} text={el.text}/>)}
    </>
}

