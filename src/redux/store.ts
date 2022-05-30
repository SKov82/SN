import {ProfileDataType, profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

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

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderAll: () => void
    subscribe: ( callback: () => void ) => void
    dispatch: (action: any) => void
}

export let store: StoreType = {
    _state: {
        profileData: {
            posts: [
                {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
                {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
            ],
            newPostText: '',
            profile: null,
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

    dispatch(action: any) {
        this._state.profileData = profileReducer(this._state.profileData, action)
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
        this._renderAll()
    }
}