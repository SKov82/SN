import React from 'react';
import s from './Main.module.css';
import {Navbar} from './Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';

export function Main() {
    return (
        <div className={s.container}>
            <Navbar/>

            <div className={s.bg}>
                <h1 className="text-3xl font-bold text-center">
                    Привет, User
                </h1>
            </div>

            <Route path={'/main'} />
            <Route path={'/news'} />
            <Route path={'/about'} />
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/friends'} />
            <Route path={'/groups'} />
            <Route path={'/settings'} />
        </div>
    );
}