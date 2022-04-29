let renderAll = () => {}

export const subscribe = (observer: any) => {
    renderAll = observer
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileDataType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (post: string) => void
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

export let state: StateType = {
    profileData: {
        posts: [
            {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
            {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
        ],
        newPostText: '',
        addPost() {
            state.profileData.posts.unshift({
                id: state.profileData.posts.length + 1,
                message: state.profileData.newPostText,
                likesCount: 0
            })
            state.profileData.updateNewPostText('')
        },
        updateNewPostText(post: string) {
            state.profileData.newPostText = post
            renderAll()
        }
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
}

// @ts-ignore
window.state = state
