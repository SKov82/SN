import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export function renderAll(state: any) {
    ReactDOM.render((
        <App
            state={state}
        />),
    document.getElementById('root')
    );
}
