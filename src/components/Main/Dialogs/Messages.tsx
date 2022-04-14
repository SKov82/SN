import css from './Messages.module.css';
import React from 'react';

type MessageType = {
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

export function Messages() {
    let messages: Array<MessageType> = [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Ты дома?'},
        {id: 3, text: 'Привет. Да, только пришел'},
    ]

    return <>{messages.map(el => <Message id={el.id} text={el.text}/>)}</>
}

