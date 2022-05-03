import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './state';

let renderAll = () => {
    ReactDOM.render((
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />),
        document.getElementById('root')
    );
}

renderAll()

store.subscribe(renderAll)