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

export type StoreType = {
    _state: StateType
    addPost: () => void
    updateNewPostText: (post: string) => void
    renderAll: () => void
    subscribe: ( observer: () => void ) => void
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
    addPost() {
        this._state.profileData.posts.unshift({
            id: this._state.profileData.posts.length + 1,
            message: this._state.profileData.newPostText,
            likesCount: 0
        })
        this.updateNewPostText('')
    },
    updateNewPostText(post: string) {
        this._state.profileData.newPostText = post
        this.renderAll()
    },
    renderAll() {},
    subscribe(observer: () => void) {
        this.renderAll = observer
    },
}

// @ts-ignore
window.store = store
