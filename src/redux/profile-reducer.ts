export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
    profile: null
}

let initialState: ProfileDataType = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    newPostText: '',
    profile: null
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
        default:
            return state
    }
}

type ActionType = AddNewPostType | UpdateNewPostType | SetUserProfileType
type AddNewPostType = ReturnType<typeof addNewPost>
type UpdateNewPostType = ReturnType<typeof updateNewPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>

export const addNewPost = () => ({ type: 'ADD_POST' } as const)
export const updateNewPost = (post: string) => ({ type: 'UPDATE_NEW_POST_TEXT', post } as const)
export const setUserProfile = (profile: any) => ({ type: 'SET_USER_PROFILE', profile } as const)