import {appReducer, InitStateType, setInit} from './app-reducer';

const startState: InitStateType = {
    isInit: false
}

test('set init to true', () => {
    const endState = appReducer(startState, setInit())

    expect(endState.isInit).toBeTruthy()
})
