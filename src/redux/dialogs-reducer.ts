import {DialogsDataType, DispatchActionType} from './state';

const [
    UPDATE_NEW_MESSAGE,
    ADD_MESSAGE,
] = [
    'UPDATE-NEW-MESSAGE',
    'ADD-MESSAGE',
]

export const dialogsReducer = (state: DialogsDataType, action: DispatchActionType) => {

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
