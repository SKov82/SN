import React from 'react';
import css from './Main.module.css';
import {Navbar} from './Navbar';
import {Profile} from './Profile/Profile';
import {Dialogs} from './Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {AppPropsType} from '../../App';

export function Main({state, dispatch}: AppPropsType) {
    return (
        <div className={css.container}>
            <Navbar/>

            <div className={css.bg}>
                <h1 className="text-3xl font-bold text-center">
                    Привет, User
                </h1>
            </div>

            <Route path={'/main'} />
            <Route path={'/news'} />
            <Route path={'/about'} />
            <Route path={'/profile'} render={ () => <Profile profileData={state.profileData}
                                                             dispatch={dispatch}
                                                    /> }
            />
            <Route path={'/dialogs'} render={ () => <Dialogs dialogsData={state.dialogsData}
                                                             dispatch={dispatch}
                                                    /> }
            />
            <Route path={'/friends'} />
            <Route path={'/groups'} />
            <Route path={'/settings'} />
        </div>
    );
}