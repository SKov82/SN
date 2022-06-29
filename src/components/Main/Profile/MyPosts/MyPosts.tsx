import React from 'react';
import css from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType, ProfileDataType} from '../../../../redux/profile-reducer';
import {Field, reduxForm} from 'redux-form';

type MyPostsType = {
    profileData: ProfileDataType
    addPost: (newPost: string) => void
}

export function MyPosts({profileData, addPost}: MyPostsType) {
    let postsElements = profileData.posts.map((el: PostType) => {
        return <Post key={el.id}
                     id={el.id}
                     message={el.message}
                     likesCount={el.likesCount}
        />
    })

    const addPostHandler = (formData: any) => {
        addPost(formData.newPost)
    }

    return (
        <div>
            <div className={css.post_title}>Мои посты</div>
            <AddPostFormRedux onSubmit={addPostHandler} />
            {postsElements}
        </div>
    );
}

const AddPostForm = (props: any) => {
    return (
        <form className={css.new_post} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPost'} rows={3} />
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Запостить
            </button>
        </form>
    )
}
const AddPostFormRedux = reduxForm({form: 'newPostForm'}) (AddPostForm)