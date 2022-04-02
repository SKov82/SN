import React from 'react';
import classes from './Profile.module.css';

export function Profile() {
    return (
        <div className={classes.content}>
            <ul>
                <li>HTML</li>
                <li>CSS/SASS</li>
                <li>JS/TS</li>
                <li>React/Vue</li>
                <li>Python</li>
                <li>Django</li>
            </ul>
        </div>
    );
}
