import {DispatchActionType, ProfileDataType} from './state';

const [
    ADD_POST,
    UPDATE_NEW_POST_TEXT,
] = [
    'ADD-POST',
    'UPDATE-NEW-POST-TEXT',
]

export const profileReducer = (state: ProfileDataType, action: DispatchActionType) => {

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
