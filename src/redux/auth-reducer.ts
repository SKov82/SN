export type AuthDataType = {
    id: number | null
    login: string
    email: string
    isLoading: boolean
}

let initialState: AuthDataType = {
    id: null,
    login: '',
    email: '',
    isLoading: false
}

export const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case 'CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeLoadingStatusType

type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

export const changeLoadingStatus = () => ({ type: 'CHANGE-LOADING-STATUS' } as const)