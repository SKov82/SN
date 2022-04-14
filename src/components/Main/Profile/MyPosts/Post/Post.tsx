import React from 'react';
import s from './Post.module.css';

type PostType = {
    id: number
    message: string
    likes_count: number
}

export function Post(props: PostType) {
    return (
        <div className={s.post}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTSey5EKDkLqJpUsCn-yuh08wJszrqyV2AxuepY=s900-c-k-c0x00ffffff-no-rj" alt="avatar"/>

            <span className={s.message}>
                {props.message}
            </span>

            <span className={s.like}>
                <img src="https://cdn.pixabay.com/photo/2016/11/30/09/28/cursor-1872301_1280.png" alt="like"/>
                <span>
                    {props.likes_count}
                </span>
            </span>
        </div>
    );
}
