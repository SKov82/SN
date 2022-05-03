import css from './Messages.module.css';
import React from 'react';
import {
    addMessageActionCreator, DispatchActionType,
    MessageType, updateNewMessageActionCreator,
} from '../../../state';

function Message({text}: MessageType) {
    return (
        <div className={css.message}>
            {text}
        </div>
    )
}

type MessagesPropsType = {
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: DispatchActionType) => void
}

export function Messages({messages, newMessageText, dispatch}: MessagesPropsType) {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessageHandler = () => {
        if (newMessageElement.current && newMessageElement.current.value.trim()) {
            dispatch( addMessageActionCreator() )
        }
    }
    const onChangeMessageHandler = () => {
        if (newMessageElement.current) dispatch( updateNewMessageActionCreator(newMessageElement.current.value) )
    }

    return <>
        {messages.map((el: MessageType) => <Message key={el.id} id={el.id} text={el.text}/>)}

        <div className={css.new_message}>
            <textarea value={newMessageText}
                      ref={newMessageElement}
                      onChange={onChangeMessageHandler}
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
