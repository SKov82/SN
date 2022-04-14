import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts() {
    let posts = [
        {id: 2, message: "Всем привет! Начал изучать React. А что учите вы?", likes_count: 12},
        {id: 1, message: "Привет. Это мой первый пост.", likes_count: 9199},
    ]
    let postsElements = posts.map(el => <Post id={el.id} message={el.message} likes_count={el.likes_count}/>)

    return (
        <div>
            <div className={s.post_title}>Мои посты</div>
            
            <div className={s.new_post}>
                <textarea name="new_post" id="new_post" rows={3}></textarea>

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Запостить
                </button>
            </div>

            {postsElements}
        </div>
    );
}
