import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer
})

export let store = createStore(reducers)