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
    profile: null | ProfileType
    status: string | null
}

let initialState: ProfileDataType = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    profile: null,
    status: null,
}

export const profileReducer = (state: ProfileDataType = initialState, action: ActionType): ProfileDataType => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {...state,
                posts: [
                    { id: state.posts.length + 1, message: action.newPost, likesCount: 0 }, ...state.posts
                ]
            }
        case 'profile/REMOVE_POST':
            return {...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case 'profile/SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'profile/SET_USER_STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

type ActionType = ReturnType<typeof addNewPost>
    | ReturnType<typeof removePost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

export const addNewPost = (newPost: string) => ({ type: 'profile/ADD_POST', newPost } as const)
export const removePost = (id: number) => ({ type: 'profile/REMOVE_POST', id } as const)
export const setUserProfile = (profile: ProfileType) => ({ type: 'profile/SET_USER_PROFILE', profile } as const)
export const setUserStatus = (status: string | null) => ({ type: 'profile/SET_USER_STATUS', status } as const)

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

export const updateUserStatus = (newStatus: string) => async (dispatch: Dispatch) => {
    let data = await profileAPI.updateUserStatus(newStatus)
    if (!data.resultCode) dispatch(setUserStatus(newStatus))
}
