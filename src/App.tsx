import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {BrowserRouter} from 'react-router-dom';

function App(props: any) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main
                    posts={props.posts}
                    dialogs={props.dialogs}
                    messages={props.messages}
                />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
