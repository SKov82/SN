import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';
import {ProfileType} from '../components/Main/Profile/Profile';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
    status: string | null
}

let initialState: ProfileDataType = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    newPostText: '',
    profile: null,
    status: null,
}

export const profileReducer = (state: ProfileDataType = initialState, action: ActionType): ProfileDataType => {
    switch (action.type) {
        case 'ADD_POST':
            return {...state,
                posts: [
                    { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }, ...state.posts
                ],
                newPostText: ''
            }
        case 'UPDATE_NEW_POST_TEXT':
            return {...state, newPostText: action.post}
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_USER_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

type ActionType = AddNewPostType | UpdateNewPostType | SetUserProfileType | SetUserStatusType
type AddNewPostType = ReturnType<typeof addNewPost>
type UpdateNewPostType = ReturnType<typeof updateNewPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type SetUserStatusType = ReturnType<typeof setUserStatus>

export const addNewPost = () => ({ type: 'ADD_POST' } as const)
export const updateNewPost = (post: string) => ({ type: 'UPDATE_NEW_POST_TEXT', post } as const)
const setUserProfile = (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const)
const setUserStatus = (status: string | null) => ({ type: 'SET_USER_STATUS', status } as const)

export const getUserProfile = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userID).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getUserStatus = (userID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserStatus(userID).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}
export const updateUserStatus = (newStatus: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateUserStatus(newStatus).then(data => {
            if (!data.resultCode) dispatch(setUserStatus(data))
        })
    }
}