import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import {DispatchActionType, StateType} from './state';

export type AppPropsType ={
    state: StateType
    dispatch: (action: DispatchActionType) => void
}

function App({state, dispatch}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main
                    state={state}
                    dispatch={dispatch}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
