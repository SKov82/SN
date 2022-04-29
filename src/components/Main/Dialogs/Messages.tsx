import css from './Messages.module.css';
import React from 'react';
import {MessageType} from '../../../state';

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

        <div className={css.new_message}>
            <textarea name="new_message" id="new_message" rows={3} />

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={ () => {} }
            >
                Отправить
            </button>
        </div>
    </>
}

