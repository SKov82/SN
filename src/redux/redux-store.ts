import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer } from 'redux-form'
import { appReducer } from './app-reducer'

let rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    usersData: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: reducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
