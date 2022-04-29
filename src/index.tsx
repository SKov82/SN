import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subscribe} from './state';

let renderAll = () => {
    ReactDOM.render((
            <App
                state={state}
            />),
        document.getElementById('root')
    );
}

renderAll()

subscribe(renderAll)