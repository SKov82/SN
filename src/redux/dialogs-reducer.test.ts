import {addMessageAC, DialogsDataType, dialogsReducer, updateNewMessageAC} from './dialogs-reducer';

const startState: DialogsDataType = {
    dialogs: [
        {id: 1, name: 'Ирина'},
        {id: 2, name: 'Юля'},
    ],
    messages: [
        {id: 1, text: 'Привет. Ты дома?'},
        {id: 2, text: 'Привет. Да, только пришел'},
    ],
    newMessageText: 'Hey',
}

test('update new message', () => {
    const endState = dialogsReducer(startState, updateNewMessageAC('hi'))

    expect(endState.newMessageText).toBe('hi')
    expect(endState.dialogs.length).toBe(startState.dialogs.length)
    expect(endState.messages.length).toBe(startState.messages.length)
    expect(endState.dialogs === startState.dialogs).toBeTruthy()
    expect(endState.messages === startState.messages).toBeTruthy()
    expect(endState === startState).toBeFalsy()
})

test('add new message', () => {
    const endState = dialogsReducer(startState, addMessageAC())

    expect(endState.newMessageText).toBe('')
    expect(endState.dialogs.length).toBe(startState.dialogs.length)
    expect(endState.messages.length).toBe(startState.messages.length + 1)
    expect(endState.messages[0]).toBe(startState.messages[0])
    expect(endState.messages[2].text).toBe('Hey')
    expect(endState.dialogs === startState.dialogs).toBeTruthy()
    expect(endState.messages === startState.messages).toBeFalsy()
    expect(endState === startState).toBeFalsy()
})