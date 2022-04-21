import {renderAll} from './render';

export let state = {
    profileData: {
        posts: [
            {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likesCount: 12},
            {id: 1, message: "Привет. Это мой первый пост.", likesCount: 9199},
        ],
        addPost(post: string) {
            state.profileData.posts.unshift({
                id: state.profileData.posts.length + 1,
                message: post,
                likesCount: 0
            })
            renderAll(state)
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
