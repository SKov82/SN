import {Dispatch} from 'redux';
import {getAuthData} from './auth-reducer';

export type InitStateType = {
    isInit: boolean
}
let initialState: InitStateType = {
    isInit: false
}
export const appReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'app/SET_INIT':
            return {...state, isInit: true}
        default:
            return state
    }
}
export type ActionType = ReturnType<typeof setInit>

export const setInit = () => ({type: 'app/SET_INIT'} as const)

export const getInit = () => {
    return (dispatch: Dispatch) => {
        dispatch(getAuthData())
            .then(dispatch(setInit()))
    }
}
