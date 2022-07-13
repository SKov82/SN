import {appReducer, InitStateType} from './app-reducer';

const startState: InitStateType = {}

test('', () => {
    const endState = appReducer(startState, {type: ''})

    expect(endState).toBe(startState)

})