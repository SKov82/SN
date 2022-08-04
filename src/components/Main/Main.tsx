import React from 'react'
import css from './Main.module.css'
import { Navbar } from './Navbar'
import { DialogsContainer } from './Dialogs/DialogsContainer'
import { Route } from 'react-router-dom'
import { UsersContainer } from './Users/UsersContainer'
import { ProfileContainer } from './Profile/ProfileContainer'
import { Login } from '../Login'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'

export function Main() {
    const userName = useSelector<AppStateType, null | string>(state => state.auth.data.login)
    return (
        <div className={css.container}>
            <Navbar />

            <div className={css.bg}>
                <h1 className='text-3xl font-bold text-center'>{userName ? `Привет, ${userName}` : ''}</h1>
            </div>

            <Route path={'/main'} />
            <Route path={'/news'} />
            <Route path={'/login'} render={() => <Login />} />
            <Route
                path={'/profile/:userID?'}
                render={() => {
                    // @ts-ignore
                    return <ProfileContainer />
                }}
            />
            <Route
                path={'/dialogs'}
                render={() => {
                    // @ts-ignore
                    return <DialogsContainer />
                }}
            />
            <Route path={'/friends'} />
            <Route
                path={'/users'}
                render={() => {
                    // @ts-ignore
                    return <UsersContainer />
                }}
            />
            <Route path={'/settings'} />
        </div>
    )
}
