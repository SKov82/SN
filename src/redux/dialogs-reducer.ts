import {DialogsDataType, DispatchActionType} from './store';

export const [
    UPDATE_NEW_MESSAGE,
    ADD_MESSAGE,
] = [
    'UPDATE-NEW-MESSAGE',
    'ADD-MESSAGE',
]

let initialState = {
    dialogs: [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Юля'},
        {id: 3, name: 'Вова'},
        {id: 4, name: 'Миша'},
    ],
    messages: [
        {id: 1, text: 'Привет'},
        {id: 2, text: 'Ты дома?'},
        {id: 3, text: 'Привет. Да, только пришел'},
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: DialogsDataType = initialState, action: DispatchActionType) => {

    switch (action.type) {
        case (UPDATE_NEW_MESSAGE):
            state.newMessageText = action.text || ''
            break
        case (ADD_MESSAGE):
            state.messages.push({
                id: state.messages.length + 1,
                text: state.newMessageText
            })
            state.newMessageText = ''
            break
    }

    return state
}

export const updateNewMessageActionCreator = (message: string): DispatchActionType => {
    return {type: UPDATE_NEW_MESSAGE, text: message}
}
export const addMessageActionCreator = (): DispatchActionType => ({type: ADD_MESSAGE})