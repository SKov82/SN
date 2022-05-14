import {DispatchActionType} from './store';

export const [
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
] = [
    'ADD-POST',
    'UPDATE-NEW-POST-TEXT',
]

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: ProfileDataType = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfileDataType = initialState, action: DispatchActionType): ProfileDataType => {
    switch (action.type) {
        case ADD_POST:
            return {...state,
                posts: [
                    { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }, ...state.posts
                ],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text || ''}
        default:
            return state
    }
}

export const addNewPostAC = (): DispatchActionType => ({ type: ADD_POST }) as const
export const updateNewPostAC = (post: string): DispatchActionType => {
    return { type: UPDATE_NEW_POST_TEXT, text: post } as const
}