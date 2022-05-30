import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';

let rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersData: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)

// @ts-ignore
window.store = store