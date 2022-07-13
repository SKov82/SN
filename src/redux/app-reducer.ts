export type InitStateType = {
}
let initialState: InitStateType = {}
export const appReducer = (state: InitStateType = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}
export type ActionType = {type: ''}