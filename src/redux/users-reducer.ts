import {appAPI} from '../api/api';
import {Dispatch} from 'redux';

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
    isLoading: boolean
}

let initialState: UsersDataType = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isLoading: false
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
        case 'CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeFollowType
    | ShowUsersType
    | SetCurrentPageType
    | SetTotalCountType
    | ChangeLoadingStatusType
type ChangeFollowType = ReturnType<typeof changeFollow>
type ShowUsersType = ReturnType<typeof showUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetTotalCountType = ReturnType<typeof setTotalCount>
type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

export const changeFollow = (userID: number) => ({ type: 'CHANGE-FOLLOW', payload: {userID} } as const)
export const showUsers = (users: UserType[]) => ({ type: 'SHOW-USERS', payload: {users} } as const)
export const setCurrentPage = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', payload: {currentPage} } as const)
export const setTotalCount = (totalCount: number) => ({ type: 'SET-TOTAL-COUNT', payload: {totalCount} } as const)
export const changeLoadingStatus = () => ({ type: 'CHANGE-LOADING-STATUS' } as const)

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeLoadingStatus())
        appAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(changeLoadingStatus())
            dispatch(showUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
    }
}

export const toggleFollowStatus = (userID: number, method: 'DELETE' | 'POST') => {
    return (dispatch: Dispatch) => {
        dispatch(changeLoadingStatus())
        appAPI.changeFollowStatus(userID, method)
            .then(resultCode => {
                dispatch(changeLoadingStatus())
                if (!resultCode) dispatch(changeFollow(userID))
            })
    }
}