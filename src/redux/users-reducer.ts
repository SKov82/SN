export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {small: null | string, large: null | string}
    status: null | string
    followed: boolean
}
export type UsersDataType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
}

let initialState: UsersDataType = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case 'CHANGE-FOLLOW':
            return {...state, users: state.users.map(
                user => user.id === action.payload.userID ? {...user, followed: !user.followed} : user
            )}
        case 'SHOW-USERS':
            return {...state, users: action.payload.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'SET-TOTAL-COUNT':
            return {...state, totalCount: action.payload.totalCount}
        default:
            return state
    }
}

export type ActionType = ChangeFollowACType | ShowUsersACType | SetCurrentPageACType | SetTotalCountACType
type ChangeFollowACType = ReturnType<typeof changeFollowAC>
type ShowUsersACType = ReturnType<typeof showUsersAC>
type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type SetTotalCountACType = ReturnType<typeof setTotalCountAC>

export const changeFollowAC = (userID: number) => ({ type: 'CHANGE-FOLLOW', payload: {userID} } as const)
export const showUsersAC = (users: UserType[]) => ({ type: 'SHOW-USERS', payload: {users} } as const)
export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', payload: {currentPage} } as const)
export const setTotalCountAC = (totalCount: number) => ({ type: 'SET-TOTAL-COUNT', payload: {totalCount} } as const)