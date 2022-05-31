import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';

let rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersData: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store