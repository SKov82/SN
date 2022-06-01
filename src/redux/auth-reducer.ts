type StateType = {
    id: null | number
    login: null | string
    email: null | string
}
export type AuthDataType = {
    data: StateType
    isLoading: boolean
}

let initialState: AuthDataType = {
    data: {
        id: null,
        login: null,
        email: null,
    },
    isLoading: false
}

export const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return {...state, data: action.data}
        case 'CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeLoadingStatusType | SetAuthDataType

type SetAuthDataType = ReturnType<typeof setAuthData>
type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

export const setAuthData = (data: StateType) => ({ type: 'SET-AUTH-DATA', data } as const)
export const changeLoadingStatus = () => ({ type: 'CHANGE-LOADING-STATUS' } as const)