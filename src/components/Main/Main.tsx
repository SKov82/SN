import React from 'react';
import classes from './Main.module.css';
import {Navbar} from './Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';

export function Main() {
    return (
        <div className={classes.container}>
            <Navbar />

            <div className={classes.bg}>
                <h1 className="text-3xl font-bold text-center">
                    Привет, User
                </h1>
            </div>

            <Profile />
            <Dialogs />
        </div>
    );
}