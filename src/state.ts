const [ADD_POST, UPDATE_NEW_POST_TEXT] = ['ADD-POST', 'UPDATE-NEW-POST-TEXT']

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    text: string
}

export type DialogsDataType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type StateType = {
    profileData: ProfileDataType
    dialogsData: DialogsDataType
}

export type DispatchActionType = {
    type: typeof ADD_POST | typeof UPDATE_NEW_POST_TEXT
    post?: string
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
            ]
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
        switch (action.type) {
            case (ADD_POST):
                this._state.profileData.posts.unshift({
                    id: this._state.profileData.posts.length + 1,
                    message: this._state.profileData.newPostText,
                    likesCount: 0
                })
                this.dispatch( {type: UPDATE_NEW_POST_TEXT, post: ''} )
                break
            case (UPDATE_NEW_POST_TEXT):
                this._state.profileData.newPostText = action.post || ''
                this._renderAll()
                break
        }
    }
}

export const addNewPostActionCreator = (): DispatchActionType => {
    return {type: ADD_POST}
}

export const updateNewPostActionCreator = (post: string): DispatchActionType => {
    return {type: UPDATE_NEW_POST_TEXT, post: post}
}

// @ts-ignore
window.store = store
