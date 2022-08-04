import { AuthDataType, authReducer, changeLoadingStatus, setAuthData, toggleIsAuth } from './auth-reducer'

let startState: AuthDataType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isLoading: false,
    isAuth: false,
}

test('set auth data', () => {
    const endState = authReducer(
        startState,
        setAuthData({
            id: 1,
            login: 'login',
            email: 'email@mail.ru',
        }),
    )

    expect(endState === startState).toBeFalsy()
    expect(endState.isLoading === startState.isLoading).toBeTruthy()
    expect(endState.isAuth === startState.isAuth).toBeTruthy()
    expect(endState.data === startState.data).toBeFalsy()
    expect(endState.data.id).toBe(1)
    expect(endState.data.login).toBe('login')
    expect(endState.data.email).toBe('email@mail.ru')
})

test('toggle isAuth', () => {
    const endState = authReducer(startState, toggleIsAuth(true))

    expect(endState === startState).toBeFalsy()
    expect(endState.isLoading === startState.isLoading).toBeTruthy()
    expect(endState.data === startState.data).toBeTruthy()
    expect(endState.isAuth).toBeTruthy()
})

test('change loading status', () => {
    const endState = authReducer(startState, changeLoadingStatus())

    expect(endState === startState).toBeFalsy()
    expect(endState.isLoading).toBe(!startState.isLoading)
    expect(endState.data === startState.data).toBeTruthy()
    expect(endState.isAuth === startState.isAuth).toBeTruthy()
})
