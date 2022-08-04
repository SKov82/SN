import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

let renderAll = () => {
    ReactDOM.render((
        <BrowserRouter basename={'/' + window.location.pathname.split('/')[1]}>
            <Provider store={store}>
                < // @ts-ignore
                    App
                />
            </Provider>
        </BrowserRouter>), document.getElementById('root')
    );
}

renderAll()

store.subscribe(renderAll)
