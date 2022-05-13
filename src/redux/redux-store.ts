import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';

let rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)