import React from 'react';
import css from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export function Profile() {
    return (
        <div className={css.content}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTSey5EKDkLqJpUsCn-yuh08wJszrqyV2AxuepY=s900-c-k-c0x00ffffff-no-rj" alt="avatar"/>

            <div>Что-то о чем-то как-то и где-то</div>

            <MyPosts />
        </div>
    );
}
