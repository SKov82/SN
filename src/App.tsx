import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
