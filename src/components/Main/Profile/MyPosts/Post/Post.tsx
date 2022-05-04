import React from 'react';
import css from './Post.module.css';
import {PostType} from '../../../../../redux/state';

export function Post({message, likesCount}: PostType) {
    return (
        <div className={css.post}>
            <img src="https://secure.gravatar.com/avatar/d65ba582994efa3515a7936eb7c337ef?s=96&d=retro" alt="avatar"/>

            <span className={css.message}>
                {message}
            </span>

            <span className={css.like}>
                <img src="https://cdn.pixabay.com/photo/2016/11/30/09/28/cursor-1872301_1280.png" alt="like"/>
                <span>
                    {likesCount}
                </span>
            </span>
        </div>
    );
}
