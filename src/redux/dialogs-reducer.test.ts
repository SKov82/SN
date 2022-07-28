import {addMessageAC, DialogsDataType, dialogsReducer} from './dialogs-reducer';

const startState: DialogsDataType = {
    dialogs: [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Юля'},
    ],
    messages: [
        {id: 1, text: 'Привет. Ты дома?'},
        {id: 2, text: 'Привет. Да, только пришел'},
    ],
}

test('add new message', () => {
    const endState = dialogsReducer(startState, addMessageAC('newMessage'))

    expect(endState.dialogs.length).toBe(startState.dialogs.length)
    expect(endState.messages.length).toBe(startState.messages.length + 1)
    expect(endState.messages[0]).toBe(startState.messages[0])
    expect(endState.messages[2].text).toBe('newMessage')
    expect(endState.dialogs === startState.dialogs).toBeTruthy()
    expect(endState.messages === startState.messages).toBeFalsy()
    expect(endState === startState).toBeFalsy()
})
