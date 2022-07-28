export const [
    UPDATE_NEW_MESSAGE, ADD_MESSAGE,
] = [
    'UPDATE-NEW-MESSAGE', 'ADD-MESSAGE',
]

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    text: string
}
export type DialogsDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

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
}

export const dialogsReducer = (state: DialogsDataType = initialState, action: any): DialogsDataType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {...state,
                messages: [
                    ...state.messages, { id: state.messages.length + 1, text: action.newMessage }
                ]
            }
        default:
            return state
    }
}

export const addMessageAC = (newMessage: string): any => ({ type: 'ADD-MESSAGE', newMessage }) as const
