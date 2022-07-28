import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

export type StateType = {
    id: null | number
    login: null | string
    email: null | string
}
export type AuthDataType = {
    data: StateType
    isLoading: boolean
    isAuth: boolean
}

let initialState: AuthDataType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isLoading: false,
    isAuth: false,
}

export const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case 'auth/SET-AUTH-DATA':
            return {...state, data: action.data}
        case 'auth/TOGGLE_IS_AUTH':
            return {...state, isAuth: action.status}
        case 'auth/CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeLoadingStatusType | SetAuthDataType | ToggleIsAuthType

type SetAuthDataType = ReturnType<typeof setAuthData>
type ToggleIsAuthType = ReturnType<typeof toggleIsAuth>
type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

export const setAuthData = (data: StateType) => ({ type: 'auth/SET-AUTH-DATA', data } as const)
export const toggleIsAuth = (status: boolean) => ({ type: 'auth/TOGGLE_IS_AUTH', status } as const)
export const changeLoadingStatus = () => ({ type: 'auth/CHANGE-LOADING-STATUS' } as const)

export const getAuthData = (): any => {
    return (dispatch: Dispatch) => {
        return authAPI.getAuthData().then(data => {
            if (!data.resultCode) {
                dispatch(setAuthData(data.data))
                dispatch(toggleIsAuth(true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return async (dispatch: Dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        !data.resultCode
            ? dispatch(getAuthData())
            : dispatch(stopSubmit('login', {_error: data.messages[0]}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let data = await authAPI.logout()
    if (!data.resultCode) {
        dispatch(setAuthData( {id: null, login: null, email: null} ))
        dispatch(toggleIsAuth(false))
    }
}
