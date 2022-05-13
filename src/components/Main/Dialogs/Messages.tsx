import css from './Messages.module.css';
import React, {ChangeEvent} from 'react';
import {MessageType} from '../../../redux/dialogs-reducer';

function Message({text}: MessageType) {
    return (
        <div className={css.message}>
            {text}
        </div>
    )
}

type MessagesType = {
    messages: Array<MessageType>
    newMessageText: string
    updateMessage: (text: string) => void
    addMessage: () => void
}

export function Messages({messages, newMessageText, updateMessage, addMessage}: MessagesType) {
    const addMessageHandler = () => {
        if (newMessageText && newMessageText.trim()) addMessage()
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target && e.target.value !== '\n') updateMessage(e.target.value)
    }

    return <>
        {messages.map((el: MessageType) => {
            return <Message key={el.id}
                     id={el.id}
                     text={el.text}
            />
        })}

        <div className={css.new_message}>
            <textarea value={newMessageText}
                      onChange={ (e) => {onChangeMessageHandler(e)} }
                      onKeyDown={ (e) => {if (e.key === 'Enter') addMessageHandler()} }
                      name="new_message"
                      id="new_message"
                      rows={3}
            />

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={ addMessageHandler }
            >
                Отправить
            </button>
        </div>
    </>
}
