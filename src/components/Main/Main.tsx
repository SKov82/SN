import React from 'react';
import css from './Main.module.css';
import {Navbar} from './Navbar';
import {Profile} from './Profile/Profile';
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import {UsersContainer} from './Users/UsersContainer';

export function Main() {
    return (
        <div className={css.container}>
            <Navbar/>

            <div className={css.bg}>
                <h1 className="text-3xl font-bold text-center">
                    Привет, User
                </h1>
            </div>

            <Route path={'/main'}/>
            <Route path={'/news'}/>
            <Route path={'/about'}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
            <Route path={'/friends'}/>
            <Route path={'/users'} render={() => {
                // @ts-ignore
                return <UsersContainer/>
            }}/>
            <Route path={'/settings'}/>
        </div>
    );
}