import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

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
        case 'SET-AUTH-DATA':
            return {...state, data: action.data}
        case 'TOGGLE_IS_AUTH':
            return {...state, isAuth: action.status}
        case 'CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeLoadingStatusType | SetAuthDataType | ToggleIsAuthType

type SetAuthDataType = ReturnType<typeof setAuthData>
type ToggleIsAuthType = ReturnType<typeof toggleIsAuth>
type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

const setAuthData = (data: StateType) => ({ type: 'SET-AUTH-DATA', data } as const)
const toggleIsAuth = (status: boolean) => ({ type: 'TOGGLE_IS_AUTH', status } as const)
const changeLoadingStatus = () => ({ type: 'CHANGE-LOADING-STATUS' } as const)

export const getAuthData = (): any => {
    return (dispatch: Dispatch) => {
        authAPI.getAuthData().then(data => {
            if (!data.resultCode) {
                dispatch(setAuthData(data.data))
                dispatch(toggleIsAuth(true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: Dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (!data.resultCode) {
                dispatch(getAuthData())
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout().then(data => {
            dispatch(toggleIsAuth(false))
        })
    }
}