import React from 'react';
import './App.css';
import {Main} from './components/Main/Main';
import {Footer} from './components/Footer';
import {HeaderContainer} from './components/Header/HeaderContainer';

function App() {
    return (
        <div className="App">
            <HeaderContainer />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
