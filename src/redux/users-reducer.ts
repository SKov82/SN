import {usersAPI} from '../api/api';
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
        case 'users/CHANGE-FOLLOW':
            return {...state, users: state.users.map(
                user => user.id === action.payload.userID ? {...user, followed: !user.followed} : user
            )}
        case 'users/SHOW-USERS':
            return {...state, users: action.payload.users}
        case 'users/SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.currentPage}
        case 'users/SET-PAGE-SIZE':
            return {...state, pageSize: action.payload.pageSize}
        case 'users/SET-TOTAL-COUNT':
            return {...state, totalCount: action.payload.totalCount}
        case 'users/CHANGE-LOADING-STATUS':
            return {...state, isLoading: !state.isLoading}
        default:
            return state
    }
}

export type ActionType = ChangeFollowType
    | ShowUsersType
    | SetCurrentPageType
    | SetPageSizeType
    | SetTotalCountType
    | ChangeLoadingStatusType
type ChangeFollowType = ReturnType<typeof changeFollow>
type ShowUsersType = ReturnType<typeof showUsers>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetPageSizeType = ReturnType<typeof setPageSize>
type SetTotalCountType = ReturnType<typeof setTotalCount>
type ChangeLoadingStatusType = ReturnType<typeof changeLoadingStatus>

export const changeFollow = (userID: number) => ({ type: 'users/CHANGE-FOLLOW', payload: {userID} } as const)
export const showUsers = (users: UserType[]) => ({ type: 'users/SHOW-USERS', payload: {users} } as const)
export const setCurrentPage = (currentPage: number) => ({ type: 'users/SET-CURRENT-PAGE', payload: {currentPage} } as const)
export const setPageSize = (pageSize: number) => ({ type: 'users/SET-PAGE-SIZE', payload: {pageSize} } as const)
export const setTotalCount = (totalCount: number) => ({ type: 'users/SET-TOTAL-COUNT', payload: {totalCount} } as const)
export const changeLoadingStatus = () => ({ type: 'users/CHANGE-LOADING-STATUS' } as const)

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(changeLoadingStatus())
    let data = await usersAPI.getUsers(currentPage, pageSize)
    if (!data.error) {
        dispatch(changeLoadingStatus())
        dispatch(showUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(setCurrentPage(currentPage))
    }
}

export const toggleFollowStatus = (userID: number, method: 'DELETE' | 'POST') => async (dispatch: Dispatch) => {
    dispatch(changeLoadingStatus())
    let resultCode = await usersAPI.changeFollowStatus(userID, method)
    dispatch(changeLoadingStatus())
    if (!resultCode) dispatch(changeFollow(userID))
}
