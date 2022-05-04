import React from 'react';
import css from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../../redux/state';
import {ProfilePropsType} from '../Profile';
import {addNewPostActionCreator, updateNewPostActionCreator} from '../../../../redux/profile-reducer';

export function MyPosts({profileData, dispatch}: ProfilePropsType) {
    let postsElements = profileData.posts.map((el: PostType) => <Post key={el.id} id={el.id} message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const newPostHandler = () => {
        if (newPostElement.current && newPostElement.current.value.trim()) {
            dispatch( addNewPostActionCreator() )
        }
    }
    const onChangeNewPostHandler = () => {
        if (newPostElement.current) dispatch( updateNewPostActionCreator(newPostElement.current.value) )
    }

    return (
        <div>
            <div className={css.post_title}>Мои посты</div>
            
            <div className={css.new_post}>
                <textarea ref={newPostElement}
                          value={profileData.newPostText}
                          onChange={onChangeNewPostHandler}
                          onKeyDown={ (e) => {if (e.key === 'Enter') newPostHandler()} }
                          name="new_post"
                          id="new_post"
                          rows={3}
                />

                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={newPostHandler}
                >
                    Запостить
                </button>
            </div>

            {postsElements}
        </div>
    );
}
