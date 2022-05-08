import React from 'react';
import { StoreContext } from '../../../StoreContext';
import {Dialogs} from './Dialogs';
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogs-reducer';


export function DialogsContainer() {

    return (
        <StoreContext.Consumer>
            { (store) => {

                const updatePost = (text: string) => {
                    store.dispatch( updateNewMessageActionCreator(text) )
                }
                const addPost = () => {
                    store.dispatch( addMessageActionCreator() )
                }

                return (
                    <Dialogs dialogsData={store.getState().dialogsData}
                             updateMessage={updatePost}
                             addMessage={addPost}
                    />
                )
            } }
        </StoreContext.Consumer>
    )
}
