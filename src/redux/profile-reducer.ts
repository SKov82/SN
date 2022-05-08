import {DispatchActionType, ProfileDataType} from './store';

export const [
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
] = [
    'ADD-POST',
    'UPDATE-NEW-POST-TEXT',
]

let initialState = {
    posts: [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfileDataType = initialState, action: DispatchActionType) => {

    switch (action.type) {
        case (ADD_POST):
            state.posts.unshift({
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            })
            state.newPostText = ''
            break
        case (UPDATE_NEW_POST_TEXT):
            state.newPostText = action.text || ''
            break
    }

    return state
}

export const addNewPostActionCreator = (): DispatchActionType => ({type: ADD_POST})
export const updateNewPostActionCreator = (post: string): DispatchActionType => {
    return {type: UPDATE_NEW_POST_TEXT, text: post}
}