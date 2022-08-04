import css from './Messages.module.css'
import React from 'react'
import { MessageType } from '../../../redux/dialogs-reducer'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../../validators/validators'
import { TextArea } from '../../FormControls/FormController'

const AddMessage = (props: any) => {
    return (
        <form className={css.new_message} onSubmit={props.handleSubmit}>
            <Field component={TextArea} name={'newMessage'} rows={3} validate={[requiredField]} />
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                Отправить
            </button>
        </form>
    )
}
const AddMessageForm = reduxForm({ form: 'newMessageForm' })(AddMessage)

function Message({ text }: MessageType) {
    return <div className={css.message}>{text}</div>
}

type MessagesType = {
    messages: Array<MessageType>
    addMessage: (newMessage: string) => void
}

export function Messages({ messages, addMessage }: MessagesType) {
    const addMessageHandler = (formData: any) => {
        addMessage(formData.newMessage)
    }

    return (
        <>
            {messages.map((el: MessageType) => {
                return <Message key={el.id} id={el.id} text={el.text} />
            })}

            <AddMessageForm onSubmit={addMessageHandler} />
        </>
    )
}
