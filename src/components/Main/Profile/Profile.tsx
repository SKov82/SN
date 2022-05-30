import React from 'react';
import css from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export function Profile() {
    return (
        <div className={css.content}>
            <img src="https://secure.gravatar.com/avatar/d65ba582994efa3515a7936eb7c337ef?s=96&d=retro" alt="avatar"/>

            <div>Что-то о чем-то как-то и где-то</div>

            <MyPostsContainer />
        </div>
    )
}