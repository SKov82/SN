import React from 'react';
import { StoreContext } from '../../../../StoreContext';
import {MyPosts} from './MyPosts';
import {addNewPostActionCreator, updateNewPostActionCreator} from '../../../../redux/profile-reducer';

export function MyPostsContainer() {

    return (
        <StoreContext.Consumer>
            { (store) => {

                const updatePost = (text: string) => {
                    store.dispatch( updateNewPostActionCreator(text) )
                }
                const addPost = () => {
                    store.dispatch( addNewPostActionCreator() )
                }

                return (
                    <MyPosts profileData={store.getState().profileData}
                             updatePost={updatePost}
                             addPost={addPost}
                    />
                )
            } }
        </StoreContext.Consumer>
    )
}
