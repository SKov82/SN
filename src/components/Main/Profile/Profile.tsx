import React from 'react';
import css from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export function Profile({profileData}: any) {
    return (
        <div className={css.content}>
            <img src="https://secure.gravatar.com/avatar/d65ba582994efa3515a7936eb7c337ef?s=96&d=retro" alt="avatar"/>

            <div>Что-то о чем-то как-то и где-то</div>

            <MyPosts profileData={profileData} />
        </div>
    );
}
