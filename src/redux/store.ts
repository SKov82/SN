import {ADD_POST, profileReducer, UPDATE_NEW_POST_TEXT} from './profile-reducer';
import {ADD_MESSAGE, dialogsReducer, UPDATE_NEW_MESSAGE} from './dialogs-reducer';

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    text: string
}

type DialogsDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type StateType = {
    profileData: ProfileDataType
    dialogsData: DialogsDataType
}

export type DispatchActionType = {
    type: typeof ADD_POST
        | typeof UPDATE_NEW_POST_TEXT
        | typeof UPDATE_NEW_MESSAGE
        | typeof ADD_MESSAGE
    text?: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderAll: () => void
    subscribe: ( callback: () => void ) => void
    dispatch: (action: DispatchActionType) => void
}

export let store: StoreType = {
    _state: {
        profileData: {
            posts: [
                {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
                {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
            ],
            newPostText: '',
        },
        dialogsData: {
            dialogs: [
                {id: 1, name: 'Ирина'},
                {id: 2, name: 'Юля'},
                {id: 3, name: 'Вова'},
                {id: 4, name: 'Миша'},
            ],
            messages: [
                {id: 1, text: 'Привет'},
                {id: 2, text: 'Ты дома?'},
                {id: 3, text: 'Привет. Да, только пришел'},
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state
    },

    _renderAll() {},
    subscribe(observer) {
        this._renderAll = observer
    },

    dispatch(action) {
        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._renderAll()
    }
}

// @ts-ignore
window.store = store