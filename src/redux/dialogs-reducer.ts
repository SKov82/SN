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

export const dialogsReducer = (state: DialogsDataType = initialState, action: ActionType): DialogsDataType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE':
            return {...state,
                messages: [
                    ...state.messages, { id: state.messages.length + 1, text: action.newMessage }
                ]
            }
        case 'dialogs/REMOVE-MESSAGE':
            return {...state,
                messages: state.messages.filter(m => m.id !== action.id)
            }
        default:
            return state
    }
}
type ActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof removeMessage>

export const addMessageAC = (newMessage: string) => ({ type: 'dialogs/ADD-MESSAGE', newMessage } as const)
export const removeMessage = (id: number) => ({ type: 'dialogs/REMOVE-MESSAGE', id } as const)
