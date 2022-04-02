import React from 'react';
import classes from './Post.module.css';

export function Post(props: any) {
    return (
        <div className={classes.post}>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTSey5EKDkLqJpUsCn-yuh08wJszrqyV2AxuepY=s900-c-k-c0x00ffffff-no-rj" alt="avatar"/>

            <span>
                {props.message}
            </span>
        </div>
    );
}
