import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from './components/Main/Profile/MyPosts/Post/Post';
import {DialogType} from './components/Main/Dialogs/Dialogs';
import {MessageType} from './components/Main/Dialogs/Messages';
import {state} from './state';

// let posts: Array<PostType> = [
//     {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likes_count: 12},
//     {id: 1, message: "Привет. Это мой первый пост.", likes_count: 9199},
// ]
// let dialogs: Array<DialogType> = [
//     {id: 1, name: 'Ирина'},
//     {id: 2, name: 'Юля'},
//     {id: 3, name: 'Вова'},
//     {id: 4, name: 'Миша'},
// ]
// let messages: Array<MessageType> = [
//     {id: 1, text: 'Привет'},
//     {id: 2, text: 'Ты дома?'},
//     {id: 3, text: 'Привет. Да, только пришел'},
// ]

ReactDOM.render((
    <App
        state={state}
    />),
  document.getElementById('root')
);