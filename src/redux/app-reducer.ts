import {Dispatch} from 'redux';

export type InitStateType = {
    isInit: boolean
}
let initialState: InitStateType = {
    isInit: false
}
export const appReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'SET_INIT':
            return {...state, isInit: true}
        default:
            return state
    }
}
export type ActionType = ReturnType<typeof setInit>

export const setInit = () => ({type: 'SET_INIT'} as const)

export const getInit = () => {
    return (dispacth: Dispatch) => {

    }
}
