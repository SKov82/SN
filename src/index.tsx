import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './state';

let renderAll = () => {
    ReactDOM.render((
            <App
                state={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
            />),
        document.getElementById('root')
    );
}

renderAll()

store.subscribe(renderAll)