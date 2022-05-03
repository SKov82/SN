import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {BrowserRouter} from 'react-router-dom';
import {StateType} from './state';

export type AppPropsType ={
    state: StateType
    addPost: () => void
    updateNewPostText: (post: string) => void
}

function App({state, addPost, updateNewPostText}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
