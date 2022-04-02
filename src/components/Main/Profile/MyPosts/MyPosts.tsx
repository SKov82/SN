import React from 'react';
import classes from './MyPosts.module.css';
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            <div className={classes.post_title}>Мои посты</div>
            
            <div className={classes.new_post}>
                <textarea name="new_post" id="new_post" rows={3}></textarea>

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Запостить
                </button>
            </div>

            <Post message={"Всем привет! Начал изучать React. А что учите вы?"} />
            <Post message={"Привет. Это мой первый пост."} />
        </div>
    );
}
